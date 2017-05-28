package com.korkuts.spring;

import com.korkuts.config.AppConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.ResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolverChain;
import org.springframework.web.socket.config.annotation.*;
import org.yaml.snakeyaml.Yaml;

import javax.annotation.PostConstruct;
import javax.servlet.MultipartConfigElement;
import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@EnableWebMvc
@Configuration
@ComponentScan("com.korkuts")
@EnableTransactionManagement
@EnableAutoConfiguration
@EnableScheduling
@EnableWebSocket
public class ApplicationConfiguration {

    @Autowired
    private ApplicationContext applicationContext;

    private AppConfiguration config;

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
            "classpath:/META-INF/resources/", "classpath:/resources/",
            "classpath:/static/", "classpath:/public/"};

    @PostConstruct
    public void setConfig() throws FileNotFoundException {
        Yaml yaml = new Yaml();
        config = yaml.loadAs(new FileInputStream("./config.yml"), AppConfiguration.class);
        //defaultFlywayMigation();
    }

    /*private void defaultFlywayMigation() {
        Flyway flyway = new Flyway();
        flyway.setValidateOnMigrate(false);
        flyway.setDataSource(defaultDataSource());
        flyway.setLocations("classpath:dbmigration/default");
        flyway.migrate();
    }*/

    @Bean(name = "appConfiguration")
    public AppConfiguration getAppConfiguration() {
        return config;
    }


    @Bean(name = "dataSource")
    public DataSource defaultDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(config.db.getDriverClass());
        dataSource.setUrl(config.db.getUrl());
        dataSource.setUsername(config.db.getUsername());
        dataSource.setPassword(config.db.getPassword());
        return dataSource;
    }

    public NamedParameterJdbcTemplate namedParameterJdbcTemplate() {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(defaultDataSource());
        jdbcTemplate.setFetchSize(2000);
        return new NamedParameterJdbcTemplate(jdbcTemplate);
    }

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Bean
    public EmbeddedServletContainerFactory servletContainer() {
        return new TomcatEmbeddedServletContainerFactory();
    }

    @Bean
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
        commonsMultipartResolver.setDefaultEncoding("UTF-8");
        commonsMultipartResolver.setMaxUploadSize(1073741824);
        return commonsMultipartResolver;
    }

    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory multipartConfigFactory = new MultipartConfigFactory();
        multipartConfigFactory.setMaxFileSize("10MB");
        multipartConfigFactory.setMaxRequestSize("50MB");
        return multipartConfigFactory.createMultipartConfig();
    }

    @Configuration
    public class MyConfiguration extends WebMvcConfigurerAdapter {

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("/**").addResourceLocations(
                    CLASSPATH_RESOURCE_LOCATIONS).resourceChain(false).addResolver(new PushStateResourceResolver());
        }

        private class PushStateResourceResolver implements ResourceResolver {
            private final Resource index = new ClassPathResource("/static/index.html");
            private final List<String> handledExtensions = Arrays.asList("html", "js", "json", "csv", "css", "png", "svg", "eot", "ttf", "woff", "appcache", "jpg", "jpeg", "gif", "ico", "map");
            private final List<String> ignoredPaths = Collections.singletonList("api");

            @Override
            public Resource resolveResource(HttpServletRequest request, String requestPath, List<? extends Resource> locations, ResourceResolverChain chain) {
                return resolve(requestPath, locations);
            }

            @Override
            public String resolveUrlPath(String resourcePath, List<? extends Resource> locations, ResourceResolverChain chain) {
                Resource resolvedResource = resolve(resourcePath, locations);
                if (resolvedResource == null) {
                    return null;
                }
                try {
                    return resolvedResource.getURL().toString();
                } catch (IOException e) {
                    return resolvedResource.getFilename();
                }
            }

            private Resource resolve(String requestPath, List<? extends Resource> locations) {
                if (isIgnored(requestPath)) {
                    return null;
                }
                if (isHandled(requestPath)) {
                    return locations.stream()
                            .map(loc -> createRelative(loc, requestPath))
                            .filter(resource -> resource != null && resource.exists())
                            .findFirst()
                            .orElse(index);
                }
                return index;
            }

            private Resource createRelative(Resource resource, String relativePath) {
                try {
                    return resource.createRelative(relativePath);
                } catch (IOException e) {
                    return null;
                }
            }

            private boolean isIgnored(String path) {
                return ignoredPaths.contains(path);
            }

            private boolean isHandled(String path) {
                String extension = StringUtils.getFilenameExtension(path);
                return handledExtensions.stream().anyMatch(ext -> ext.equals(extension));
            }
        }

        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
            registry.addRedirectViewController("/", "/index.html");
        }
    }
    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(ApplicationConfiguration.class);
    }
}
