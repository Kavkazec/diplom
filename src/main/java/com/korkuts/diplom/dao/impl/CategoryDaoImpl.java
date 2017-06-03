package com.korkuts.diplom.dao.impl;

import com.korkuts.diplom.dao.CategoryDao;
import com.korkuts.diplom.dao.mapper.CategoryMapper;
import com.korkuts.diplom.model.Category;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryDaoImpl implements CategoryDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public List<Category> getAll() {
        return namedParameterJdbcTemplate
                .getJdbcOperations()
                .query("SELECT DISTINCT * FROM category", new CategoryMapper());
    }

    @Override
    public List<Category> getAllByNamesAndPhotographerIds(String ids, String names) {
        return namedParameterJdbcTemplate
                .getJdbcOperations()
                .query("        SELECT DISTINCT ca.*" +
                                "   FROM category_image ca_img" +
                                "   INNER JOIN category ca ON ca_img.category_id = ca.id" +
                                "   INNER JOIN image img ON ca_img.image_id = img.id" +
                                "   WHERE ca.name IN (" + names +") AND img.photographer_id IN (" + ids + ");",
                        new CategoryMapper());
    }

    @Override
    public List<Category> getAllByPhotographerId(Long id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("photographer_id",id);
        return namedParameterJdbcTemplate
                .query("    SELECT DISTINCT id,name " +
                        "       FROM category c" +
                        "       INNER JOIN (" +
                        "           SELECT category_id" +
                        "           FROM category_image ca_img" +
                        "           INNER JOIN image img ON ca_img.image_id=img.id " +
                        "           WHERE img.photographer_id=:photographer_id" +
                        "       ) r ON c.id=r.category_id",
                        params,
                        new CategoryMapper());
    }

    @Override
    public List<Category> getAllByNamesAndPhotographerId(Long id, String names) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);
        return namedParameterJdbcTemplate
                .query("        SELECT DISTINCT ca.*" +
                                "   FROM category_image ca_img" +
                                "   INNER JOIN category ca ON ca_img.category_id = ca.id" +
                                "   INNER JOIN image img ON ca_img.image_id = img.id" +
                                "   WHERE ca.name IN (" + names +") AND img.photographer_id=:id;",
                        params,
                        new CategoryMapper());
    }

    @Override
    public List<Category> getAllByPhotographerIds(String ids) {
        return namedParameterJdbcTemplate
                .getJdbcOperations()
                .query("        SELECT DISTINCT ca.*" +
                                "   FROM category_image ca_img" +
                                "   INNER JOIN category ca ON ca_img.category_id = ca.id" +
                                "   INNER JOIN image img ON ca_img.image_id = img.id" +
                                "   WHERE img.photographer_id IN (" + ids+ ")",
                        new CategoryMapper());
    }
}
