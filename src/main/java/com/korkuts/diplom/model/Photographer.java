package com.korkuts.diplom.model;

public class Photographer {
    private Long id;
    private String fullName;
    private String firstName;
    private String surname;
    private Integer age;
    private String description;
    private String imageLink;
    private byte[] imageAsByte;
    private String imageName;

    public Photographer() {

    }

    public Photographer(Photographer photographer, byte[] array) {
        this.id = photographer.getId();
        this.firstName = photographer.getFirstName();
        this.surname = photographer.getSurname();
        this.age = photographer.getAge();
        this.description = photographer.getDescription();
        this.imageLink = photographer.getImageLink();
        this.imageName = photographer.getImageName();
        this.imageAsByte = array;
        this.firstName = photographer.getFullName();
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public byte[] getImageAsByte() {
        return imageAsByte;
    }

    public void setImageAsByte(byte[] imageAsByte) {
        this.imageAsByte = imageAsByte;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
