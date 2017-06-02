package com.korkuts.diplom.model;

public class Image {
    private Long id;
    private String imageLink;
    private String imageName;
    private byte[] imageAsByteArray;

    public Image() {

    }

    public Image(Image image, byte[] array) {
        this.id = image.getId();
        this.imageLink = image.getImageLink();
        this.imageName = image.getImageName();
        this.imageAsByteArray = array;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public byte[] getImageAsByteArray() {
        return imageAsByteArray;
    }

    public void setImageAsByteArray(byte[] imageAsByteArray) {
        this.imageAsByteArray = imageAsByteArray;
    }
}
