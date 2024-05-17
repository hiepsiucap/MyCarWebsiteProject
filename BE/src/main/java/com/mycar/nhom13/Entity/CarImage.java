package com.mycar.nhom13.Entity;

import jakarta.persistence.*;

@Entity(name ="Car_Images")
public class CarImage {
    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "image_id")
    public int imageId;
    @Column(name="image")
    public String image;

    public String name;

    public CarImage(){

    }
    public CarImage(int imageId, String image, String name) {
        this.imageId = imageId;
        this.image = image;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
