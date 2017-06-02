package com.korkuts.diplom.dao.mapper;

import com.korkuts.diplom.model.Photographer;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PhotographerMapper implements RowMapper<Photographer> {

    @Override
    public Photographer mapRow(ResultSet resultSet, int i) throws SQLException {
        Photographer photographer = new Photographer();
        photographer.setId(resultSet.getLong("id"));
        photographer.setFirstName(resultSet.getString("f_name"));
        photographer.setSurname(resultSet.getString("s_name"));
        photographer.setAge(resultSet.getInt("age"));
        photographer.setDescription(resultSet.getString("description"));
        photographer.setImageLink(resultSet.getString("image_link"));
        return photographer;
    }
}
