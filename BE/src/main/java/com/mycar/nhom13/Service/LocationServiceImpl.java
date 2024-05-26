package com.mycar.nhom13.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycar.nhom13.Entity.Location;
import com.mycar.nhom13.Repository.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationRepository locationRepository;

	public LocationServiceImpl(LocationRepository locationRepository) {
		super();
		this.locationRepository = locationRepository;
	}

	@Override
	public Location findByAddress(String address) {
		return locationRepository.findByAddressContainingIgnoreCase(address);
	}

	@Override
	public Location save(Location location) {
		return locationRepository.save(location);
	}

}
