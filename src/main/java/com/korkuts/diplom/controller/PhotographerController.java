package com.korkuts.diplom.controller;

import com.korkuts.diplom.model.Photographer;
import com.korkuts.diplom.service.PhotographerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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

}
