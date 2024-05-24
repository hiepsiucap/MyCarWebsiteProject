package com.mycar.nhom13.Service;

import com.mycar.nhom13.Entity.Location;

public interface LocationService {
	
	Location findByAddress(String address);
}
