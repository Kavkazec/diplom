package com.korkuts.diplom.service;

import com.korkuts.diplom.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAll();

    List<Category> getAllByPhotographerId(Long id);
}
