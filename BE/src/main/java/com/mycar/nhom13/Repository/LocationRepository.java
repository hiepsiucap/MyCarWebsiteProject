package com.mycar.nhom13.Repository;

import com.mycar.nhom13.Entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Integer> {

	Location findByAddressContainingIgnoreCase(String address);

}
