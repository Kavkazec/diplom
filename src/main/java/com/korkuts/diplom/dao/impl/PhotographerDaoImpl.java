package com.korkuts.diplom.dao.impl;

import com.korkuts.diplom.dao.PhotographerDao;
import com.korkuts.diplom.dao.PhotographerMapper;
import com.korkuts.diplom.model.Photographer;
import org.springframework.beans.factory.annotation.Autowired;
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
                .query("SELECT * FROM photographer", new PhotographerMapper());
    }

    //INSERT INTO photographer(f_name,s_name,age,description) VALUES('','',22,'');
}
