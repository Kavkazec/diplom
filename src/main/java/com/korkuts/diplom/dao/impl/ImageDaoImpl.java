package com.korkuts.diplom.dao.impl;

import com.korkuts.diplom.dao.ImageDao;
import com.korkuts.diplom.dao.mapper.CategoryMapper;
import com.korkuts.diplom.dao.mapper.ImageMapper;
import com.korkuts.diplom.model.Image;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ImageDaoImpl implements ImageDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public List<Image> getAllByCategoryAndPhotographerId(Long id, String names) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);
        return namedParameterJdbcTemplate
                .query("        SELECT DISTINCT img.*" +
                                "   FROM category_image ca_img" +
                                "   INNER JOIN category ca ON ca_img.category_id = ca.id" +
                                "   INNER JOIN image img ON ca_img.image_id = img.id" +
                                "   WHERE ca.name IN (" + names + ") AND img.photographer_id=:id;",
                        params,
                        new ImageMapper());
    }
}
