package com.korkuts.diplom.dao;

import com.korkuts.diplom.model.Category;

import java.util.List;

public interface CategoryDao {

    List<Category> getAll();

    List<Category> getAllByPhotographerId(Long id);
}
