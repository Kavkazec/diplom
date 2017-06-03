package com.korkuts.diplom.dao;

import com.korkuts.diplom.model.Image;

import java.util.List;

public interface ImageDao {
    List<Image> getAllByCategoryAndPhotographerId(Long id, String names);

    List<Image> getAllByCategoryAndPhotographerIds(String ids, String names);
}
