package com.korkuts.diplom.controller;

import com.korkuts.diplom.model.Photographer;
import com.korkuts.diplom.service.CategoryService;
import com.korkuts.diplom.service.PhotographerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api")
public class PhotographerController {

    @Autowired
    private PhotographerService photographerService;

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/photographer", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody List<Photographer> getAll() {
        return photographerService.getAll();
    }

    @RequestMapping(value = "/photographer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Map<String,Object> getOne(@PathVariable("id") Long id) {
        Map<String,Object> map = new LinkedHashMap<>();
        map.put("photographer", photographerService.getSingle(id));
        map.put("categories", categoryService.getAllByPhotographerId(id));
        map.put("images", categoryService.getImagesByPhotographerId(id));
        return map;
    }

}
