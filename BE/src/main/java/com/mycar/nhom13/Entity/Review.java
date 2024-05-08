package com.mycar.nhom13.Entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_seq")
    @SequenceGenerator(name = "review_seq", sequenceName = "review_seq", allocationSize = 1)
    @Column(name = "review_id")
    private int reviewId;
    @OneToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,
            CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "rental_id")
    @JsonIgnore
    private Rental rental;
    @Pattern(regexp = "[1-5]",message = "Số đánh giá không hợp lệ.")
    private int rate;
    @Size(min=1,message = "Nội dung không được để trống.")
    private String details;
    
    @Column(name = "review_date")
    private Date date;

    public Review(){

    }

	public Review(int reviewId, Rental rental,
			@Pattern(regexp = "[1-5]", message = "Số đánh giá không hợp lệ.") int rate,
			@Size(min = 1, message = "Nội dung không được để trống.") String details, Date date) {
		super();
		this.reviewId = reviewId;
		this.rental = rental;
		this.rate = rate;
		this.details = details;
		this.date = date;
	}

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public Rental getRental() {
		return rental;
	}

	public void setRental(Rental rental) {
		this.rental = rental;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	


    
}
