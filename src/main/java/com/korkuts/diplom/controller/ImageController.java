package com.korkuts.diplom.controller;

import com.korkuts.diplom.model.Image;
import com.korkuts.diplom.model.dto.PhotographerCategories;
import com.korkuts.diplom.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api")
public class ImageController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/photographer/images", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Map<String, List<Image>> getAllByPhotographerId(@RequestBody PhotographerCategories categories) {
        return categoryService.getImagesByCategoryAndPhotographerId(categories);
    }

    @RequestMapping(value = "/photographer/images?", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Map<String, List<Image>> getAllByPhotogId(@RequestParam("photographerId") Long id) {
        return categoryService.getImagesByPhotographerId(id);
    }
}
