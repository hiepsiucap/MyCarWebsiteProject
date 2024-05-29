package com.mycar.nhom13.Entity;

import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Predicate;

import java.util.ArrayList;
import java.util.List;

public class CarSpecification {
	public static Specification<Car> filterByCriteria(List<String> brand, List<String> types, Integer minPrice,
			Integer maxPrice, List<String> fuels, List<String> province, List<String> district) {
		return (root, query, criteriaBuilder) -> {
			List<Predicate> predicates = new ArrayList<>();

			if (brand != null && !brand.isEmpty()) {
				predicates.add(root.get("brand").in(brand));
			}

			if (types != null && !types.isEmpty()) {
				predicates.add(root.get("type").in(types));
			}

			if (minPrice != null) {
				predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("cost"), minPrice));
			}

			if (maxPrice != null) {
				predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("cost"), maxPrice));
			}

			if (fuels != null && !fuels.isEmpty()) {
				predicates.add(root.get("fuel").in(fuels));
			}

			if (province != null && !province.isEmpty()) {
				predicates.add(root.join("location").get("province").in(province));
			}
			
			if (district != null && !district.isEmpty()) {
				predicates.add(root.join("location").get("district").in(district));
			}

			predicates.add(criteriaBuilder.equal(root.get("status"), "active"));
			return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
		};
	}
}
