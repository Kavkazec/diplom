package com.korkuts.diplom.dao;

import com.korkuts.diplom.model.Photographer;

import java.util.List;

public interface PhotographerDao {

    List<Photographer> getAll();

    List<Photographer> getAllByIds(String ids);

    Photographer getOne(Long id);
}
