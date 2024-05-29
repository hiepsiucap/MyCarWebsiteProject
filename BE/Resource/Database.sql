CREATE TABLE "user" (
    user_id INT PRIMARY KEY,
    first_name VARCHAR2(255) NOT NULL,
    last_name VARCHAR2(255) NOT NULL,
    email VARCHAR2(255) UNIQUE NOT NULL,
    phone_number VARCHAR2(20),
    driver_license VARCHAR2(255) ,
    driver_license_check VARCHAR2(1) CHECK(driver_license_check IN ('Y','N')),
    password VARCHAR2(255) NOT NULL,
    role VARCHAR2(10) CHECK(role IN ('Admin', 'User', 'Staff')) ,
    avatar VARCHAR2(255),
    create_date DATE
);


CREATE TABLE Locations (
    location_id INT PRIMARY KEY,
    address VARCHAR2(255) NOT NULL,
    province VARCHAR2(255) NOT NULL,
    district VARCHAR2(50) NOT NULL
);
CREATE TABLE Cars (
    car_id INT PRIMARY KEY,
    license_plates VARCHAR2(10) NOT NULL,
    brand VARCHAR2(255),
    model VARCHAR2(255),
    year INT,
    color VARCHAR2(50) NOT NULL,
    user_id INT REFERENCES "user"(user_id),
    mileage INT NOT NULL,
    type VARCHAR2(50),
    fuel VARCHAR2(10) CHECK(fuel IN ('Xang', 'Dau', 'Dien')),
    gear VARCHAR2(20) CHECK(gear IN ('Tu dong', 'So san')),
    consumption FLOAT,
    description VARCHAR2(2000),
    review FLOAT,
    number_of_review INT,
    image VARCHAR2(255),
    status VARCHAR2(10) CHECK(status IN ('pending', 'active', 'pause')),
    seat INT,
    number_of_rental INT,
    cost INT,
    location_id INT NOT NULL,

    FOREIGN KEY (location_id) REFERENCES Locations(location_id)
);

CREATE TABLE Car_Images (
    image_id INT PRIMARY KEY,
    car_id INT REFERENCES Cars(car_id),
    image varchar2(255)
);

CREATE TABLE Car_calendars (
    calendar_id INT,
    car_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    PRIMARY KEY (calendar_id),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
);


CREATE TABLE Rentals (
    rental_id INT PRIMARY KEY,
    customer_id INT,
    car_id INT,
    pick_up_location_id INT NOT NULL,
    drop_off_location_id INT NOT NULL,
    pick_up_date DATE NOT NULL,
    pick_up_hours VARCHAR2(20) NOT NULL,
    drop_off_date DATE NOT NULL,
    drop_off_hours VARCHAR2(20) NOT NULL,
    total_day INT NOT NULL,
    total_cost DECIMAL(10,2) NOT NULL,
    rental_status VARCHAR2(20) CHECK(rental_status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    FOREIGN KEY (customer_id) REFERENCES "user"(user_id),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id),
    FOREIGN KEY (pick_up_location_id) REFERENCES Locations(location_id),
    FOREIGN KEY (drop_off_location_id) REFERENCES Locations(location_id)
);

CREATE TABLE Reports (
    report_id INT PRIMARY KEY,
    rental_id INT,
    state VARCHAR2(20) CHECK(state IN ('Pending', 'complete')),
    details VARCHAR2(4000),
    report_date DATE,
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);

CREATE TABLE Reviews (
    review_id INT PRIMARY KEY,
    rental_id INT,
    rate INT NOT NULL,
    details VARCHAR2(4000) NOT NULL,
    review_date DATE,
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);

CREATE SEQUENCE usercar_seq START WITH 50;
CREATE OR REPLACE TRIGGER user_bir
BEFORE INSERT ON "user"
FOR EACH ROW

BEGIN
  SELECT usercar_seq.NEXTVAL
  INTO   :new.user_id
  FROM   dual;
END;
/