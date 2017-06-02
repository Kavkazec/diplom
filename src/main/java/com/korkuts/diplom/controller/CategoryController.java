package com.korkuts.diplom.controller;

import com.korkuts.diplom.model.Category;
import com.korkuts.diplom.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/category", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<Category> getAll() {
        return categoryService.getAll();
    }

    @RequestMapping(value = "/photographer/category", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<Category> getAllByPhotographerId(@RequestParam("photographerId") Long id) {
        return categoryService.getAllByPhotographerId(id);
    }
}
