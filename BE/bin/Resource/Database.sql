CREATE TABLE "user" (
    user_id INT PRIMARY KEY,
    first_name VARCHAR2(255) NOT NULL,
    last_name VARCHAR2(255) NOT NULL,
    email VARCHAR2(255) UNIQUE NOT NULL,
    phone_number VARCHAR2(20),
    driver_license VARCHAR2(255) NOT NULL,
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
    consumption NUMBER,
    description VARCHAR2(2000),
    review DECIMAL(10,2),
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
    calender_id INT,
    car_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    PRIMARY KEY (calender_id, car_id),
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
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);

CREATE TABLE Reviews (
    review_id INT PRIMARY KEY,
    rental_id INT,
    rate INT NOT NULL,
    details VARCHAR2(4000) NOT NULL,
    FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id)
);


INSERT INTO "user" (user_id, first_name, last_name, email, phone_number, driver_license,driver_license_check, password, role, avatar, create_date) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', '1234567890', 'DL12345','Y', 'password1', 'User', 'avatar1.jpg', TO_DATE('2023-01-01', 'YYYY-MM-DD'));
INSERT INTO "user" (user_id, first_name, last_name, email, phone_number, driver_license,driver_license_check, password, role, avatar, create_date) VALUES
(2, 'Jane', 'Smith', 'jane.smith@example.com', '0987654321', 'DL54321','N', 'password2', 'Admin', 'avatar2.jpg', TO_DATE('2023-02-01', 'YYYY-MM-DD'));
INSERT INTO "user" (user_id, first_name, last_name, email, phone_number, driver_license, driver_license_check,password, role, avatar, create_date) VALUES
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '1122334455', 'DL67890','Y', 'password3', 'Staff', 'avatar3.jpg', TO_DATE('2023-03-01', 'YYYY-MM-DD'));
INSERT INTO "user" (user_id, first_name, last_name, email, phone_number, driver_license,driver_license_check, password, role, avatar, create_date) VALUES
(4, 'Bob', 'Brown', 'bob.brown@example.com', '6677889900', 'DL09876','Y', 'password4', 'User', 'avatar4.jpg', TO_DATE('2023-04-01', 'YYYY-MM-DD'));
INSERT INTO "user" (user_id, first_name, last_name, email, phone_number, driver_license,driver_license_check, password, role, avatar, create_date) VALUES
(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '4455667788', 'DL13579','N', 'password5', 'User', 'avatar5.jpg', TO_DATE('2023-05-01', 'YYYY-MM-DD'));


INSERT INTO Locations (location_id, address, province, district) VALUES
(1, '123 Main St', 'Hanoi', 'Ba Dinh');
INSERT INTO Locations (location_id, address, province, district) VALUES
(2, '456 Maple Ave', 'Hanoi', 'Dong Da');
INSERT INTO Locations (location_id, address, province, district) VALUES
(3, '789 Oak Blvd', 'Ho Chi Minh City', 'District 1');
INSERT INTO Locations (location_id, address, province, district) VALUES
(4, '101 Pine Dr', 'Da Nang', 'Hai Chau');
INSERT INTO Locations (location_id, address, province, district) VALUES
(5, '202 Birch Rd', 'Can Tho', 'Ninh Kieu');

INSERT INTO Cars (car_id, license_plates, brand, model, year, color, user_id, mileage, type, fuel, gear, consumption, description, review, number_of_review, image, status, seat, number_of_rental, cost, location_id) VALUES
(1, '30A-12345', 'Toyota', 'Camry', 2020, 'Black', 1, 15000, 'Sedan', 'Xang', 'Tu dong', 8.5, 'Good condition, well-maintained', 4.5, 10, 'car1.jpg', 'active', 5, 3, 500, 1);
INSERT INTO Cars (car_id, license_plates, brand, model, year, color, user_id, mileage, type, fuel, gear, consumption, description, review, number_of_review, image, status, seat, number_of_rental, cost, location_id) VALUES
(2, '29B-67890', 'Ford', 'Escape', 2018, 'White', 2, 30000, 'SUV', 'Dau', 'So san', 10.2, 'Spacious SUV, perfect for family trips', 4.7, 8, 'car2.jpg', 'active', 7, 5, 600, 2);
INSERT INTO Cars (car_id, license_plates, brand, model, year, color, user_id, mileage, type, fuel, gear, consumption, description, review, number_of_review, image, status, seat, number_of_rental, cost, location_id) VALUES
(3, '51C-11223', 'Honda', 'Civic', 2019, 'Red', 3, 20000, 'Coupe', 'Xang', 'Tu dong', 9.0, 'Stylish and fuel-efficient', 4.3, 12, 'car3.jpg', 'active', 4, 6, 450, 3);
INSERT INTO Cars (car_id, license_plates, brand, model, year, color, user_id, mileage, type, fuel, gear, consumption, description, review, number_of_review, image, status, seat, number_of_rental, cost, location_id) VALUES
(4, '43D-44556', 'Isuzu', 'D-Max', 2017, 'Blue', 4, 50000, 'Truck', 'Dau', 'So san', 12.0, 'Reliable truck with great capacity', 4.1, 15, 'car4.jpg', 'pause', 2, 2, 700, 4);
INSERT INTO Cars (car_id, license_plates, brand, model, year, color, user_id, mileage, type, fuel, gear, consumption, description, review, number_of_review, image, status, seat, number_of_rental, cost, location_id) VALUES
(5, '65E-78901', 'Tesla', 'Model 3', 2021, 'Silver', 5, 10000, 'Electric', 'Dien', 'Tu dong', 3.0, 'Modern electric car with autopilot', 4.9, 20, 'car5.jpg', 'active', 5, 7, 800, 5);

INSERT INTO Rentals (rental_id, customer_id, car_id, pick_up_location_id, drop_off_location_id, pick_up_date, pick_up_hours, drop_off_date, drop_off_hours, total_day, total_cost, rental_status) VALUES
(1, 1, 1, 1, 1, TO_DATE('2023-06-01', 'YYYY-MM-DD'), '10:00 AM', TO_DATE('2023-06-05', 'YYYY-MM-DD'), '10:00 AM', 4, 2000.00, 'confirmed');
INSERT INTO Rentals (rental_id, customer_id, car_id, pick_up_location_id, drop_off_location_id, pick_up_date, pick_up_hours, drop_off_date, drop_off_hours, total_day, total_cost, rental_status) VALUES
(2, 2, 2, 2, 3, TO_DATE('2023-06-10', 'YYYY-MM-DD'), '11:00 AM', TO_DATE('2023-06-15', 'YYYY-MM-DD'), '11:00 AM', 5, 3000.00, 'completed');
INSERT INTO Rentals (rental_id, customer_id, car_id, pick_up_location_id, drop_off_location_id, pick_up_date, pick_up_hours, drop_off_date, drop_off_hours, total_day, total_cost, rental_status) VALUES
(3, 3, 3, 3, 2, TO_DATE('2023-07-01', 'YYYY-MM-DD'), '09:00 AM', TO_DATE('2023-07-03', 'YYYY-MM-DD'), '09:00 AM', 2, 900.00, 'cancelled');
INSERT INTO Rentals (rental_id, customer_id, car_id, pick_up_location_id, drop_off_location_id, pick_up_date, pick_up_hours, drop_off_date, drop_off_hours, total_day, total_cost, rental_status) VALUES
(4, 4, 4, 4, 4, TO_DATE('2023-08-01', 'YYYY-MM-DD'), '08:00 AM', TO_DATE('2023-08-07', 'YYYY-MM-DD'), '08:00 AM', 6, 4200.00, 'confirmed');
INSERT INTO Rentals (rental_id, customer_id, car_id, pick_up_location_id, drop_off_location_id, pick_up_date, pick_up_hours, drop_off_date, drop_off_hours, total_day, total_cost, rental_status) VALUES
(5, 5, 5, 5, 5, TO_DATE('2023-09-01', 'YYYY-MM-DD'), '07:00 AM', TO_DATE('2023-09-05', 'YYYY-MM-DD'), '07:00 AM', 4, 3200.00, 'pending');

INSERT INTO Reports (report_id, rental_id, state, details) VALUES
(1, 1, 'Pending', 'Customer reported a delay in the pick-up process.');
INSERT INTO Reports (report_id, rental_id, state, details) VALUES
(2, 2, 'complete', 'No issues reported.');
INSERT INTO Reports (report_id, rental_id, state, details) VALUES
(3, 3, 'complete', 'Car returned with minor scratches.');
INSERT INTO Reports (report_id, rental_id, state, details) VALUES
(4, 4, 'Pending', 'Customer reported a strange noise from the engine.');
INSERT INTO Reports (report_id, rental_id, state, details) VALUES
(5, 5, 'Pending', 'Customer experienced issues with the car navigation system.');

INSERT INTO Reviews (review_id, rental_id, rate, details) VALUES
(1, 1, 4, 'The car was in great condition but pick-up was delayed.');
INSERT INTO Reviews (review_id, rental_id, rate, details) VALUES
(2, 2, 5, 'Excellent service and car condition.');
INSERT INTO Reviews (review_id, rental_id, rate, details) VALUES
(3, 3, 3, 'The car was fine but I had to cancel the trip due to personal reasons.');
INSERT INTO Reviews (review_id, rental_id, rate, details) VALUES
(4, 4, 4, 'Good experience, but the car had some engine noise.');
INSERT INTO Reviews (review_id, rental_id, rate, details) VALUES
(5, 5, 2, 'Navigation system was faulty, making the trip difficult.');

INSERT INTO Car_Images (image_id, car_id, image) VALUES
(1, 1, 'car1_image1.jpg');
INSERT INTO Car_Images (image_id, car_id, image) VALUES
(2, 2, 'car2_image1.jpg');
INSERT INTO Car_Images (image_id, car_id, image) VALUES
(3, 3, 'car3_image1.jpg');
INSERT INTO Car_Images (image_id, car_id, image) VALUES
(4, 4, 'car4_image1.jpg');
INSERT INTO Car_Images (image_id, car_id, image) VALUES
(5, 5, 'car5_image1.jpg');

INSERT INTO Car_calendars (calender_id, car_id, start_date, end_date) VALUES
(1, 1, TO_DATE('2023-06-01', 'YYYY-MM-DD'), TO_DATE('2023-06-10', 'YYYY-MM-DD'));
INSERT INTO Car_calendars (calender_id, car_id, start_date, end_date) VALUES
(2, 2, TO_DATE('2023-06-15', 'YYYY-MM-DD'), TO_DATE('2023-06-25', 'YYYY-MM-DD'));
INSERT INTO Car_calendars (calender_id, car_id, start_date, end_date) VALUES
(3, 3, TO_DATE('2023-07-01', 'YYYY-MM-DD'), TO_DATE('2023-07-10', 'YYYY-MM-DD'));
INSERT INTO Car_calendars (calender_id, car_id, start_date, end_date) VALUES
(4, 4, TO_DATE('2023-08-01', 'YYYY-MM-DD'), TO_DATE('2023-08-10', 'YYYY-MM-DD'));
INSERT INTO Car_calendars (calender_id, car_id, start_date, end_date) VALUES
(5, 5, TO_DATE('2023-09-01', 'YYYY-MM-DD'), TO_DATE('2023-09-10', 'YYYY-MM-DD'));


commit;