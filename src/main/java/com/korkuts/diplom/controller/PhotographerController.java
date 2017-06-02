package com.korkuts.diplom.controller;

import com.korkuts.diplom.model.Photographer;
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
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class PhotographerController {

    @Autowired
    private PhotographerService photographerService;

    @RequestMapping(value = "/photographer", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody List<Photographer> getAll() {
        return photographerService.getAll();
    }

    @RequestMapping(value = "/photographer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Photographer getOne(@PathVariable("id") Long id) {
        return photographerService.getSingle(id);
    }

}
