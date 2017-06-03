package com.korkuts.diplom.dao.impl;

import com.korkuts.diplom.dao.PhotographerDao;
import com.korkuts.diplom.dao.mapper.PhotographerMapper;
import com.korkuts.diplom.model.Photographer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PhotographerDaoImpl implements PhotographerDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public List<Photographer> getAll() {
        return namedParameterJdbcTemplate
                .getJdbcOperations()
                .query("SELECT * FROM photographer", new PhotographerMapper());
    }

    @Override
    public List<Photographer> getAllByIds(String ids) {
        return namedParameterJdbcTemplate
                .getJdbcOperations()
                .query("        SELECT * " +
                                "   FROM photographer " +
                                "WHERE id IN (" + ids + ")",
                        new PhotographerMapper());
    }

    @Override
    public Photographer getOne(Long id) {
        MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("id", id);
        return namedParameterJdbcTemplate
                .queryForObject(
                        "SELECT * " +
                                "   FROM photographer " +
                                "   WHERE id=:id",
                        parameterSource,
                        new PhotographerMapper());
    }

    //INSERT INTO photographer(f_name,s_name,age,description) VALUES('','',22,'');
}
