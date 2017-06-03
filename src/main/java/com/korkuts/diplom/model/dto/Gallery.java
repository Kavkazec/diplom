package com.korkuts.diplom.model.dto;

import java.util.List;

public class Gallery {
    private List<Long> photographerIds;
    private List<String> categoryNames;

    public List<Long> getPhotographerIds() {
        return photographerIds;
    }

    public void setPhotographerIds(List<Long> photographerIds) {
        this.photographerIds = photographerIds;
    }

    public List<String> getCategoryNames() {
        return categoryNames;
    }

    public void setCategoryNames(List<String> categoryNames) {
        this.categoryNames = categoryNames;
    }
}
