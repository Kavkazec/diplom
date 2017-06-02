package com.korkuts.diplom.dao.mapper;

import com.korkuts.diplom.model.Image;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ImageMapper implements RowMapper<Image> {

    @Override
    public Image mapRow(ResultSet resultSet, int i) throws SQLException {
        Image image = new Image();
        image.setId(resultSet.getLong("id"));
        image.setImageLink(resultSet.getString("image_link"));
        image.setImageName(resultSet.getString("image_name"));
        return image;
    }
}
