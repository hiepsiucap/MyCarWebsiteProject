package com.mycar.nhom13.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "XE") 
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "MAXE")
    @JsonProperty("MaXe")
    private Long maXe;

    @Column(name = "THONGTINXE")
    @JsonProperty("ThongTinXe")
    private String thongTinXe;

    @Column(name = "CHONGOI")
    @JsonProperty("ChoNgoi")
    private String choNgoi;

    @Column(name = "NHIENLIEUTH")
    @JsonProperty("NhienLieuThu")
    private Double nhienLieuThu; 

    @Column(name = "NHIENLIEU")
    @JsonProperty("LoaiNhienLieu")
    private String loaiNhienLieu; 

    @Column(name = "HOPSO")
    @JsonProperty("HopSo")
    private String hopSo;

    @Column(name = "GIA")
    @JsonProperty("Gia")
    private Long gia;

    @Column(name = "MOTA")
    @JsonProperty("MoTa")
    private String moTa;

    @Column(name = "DANHGIA")
    @JsonProperty("DanhGia")
    private String danhGia;

    @Column(name = "VITRI")
    @JsonProperty("ViTri")
    private String viTri;

    @Column(name = "ANH")
    @JsonProperty("Anh")
    private byte[] anh;

    @Column(name = "TRANGTHAI")
    @JsonProperty("TrangThai")
    private String trangThai;

    @Column(name = "LUOTCHOTHUE")
    @JsonProperty("LuotChoThue")
    private Integer luotChoThue;

    @Column(name = "LUOTDANHGIA")
    @JsonProperty("LuotDanhGia")
    private Integer luotDanhGia;

    @Column(name = "DANHGIATRUNGBINH")
    @JsonProperty("DanhGiaTrungBinh")
    private Double danhGiaTrungBinh;

    @Column(name = "GIAYTOXE")
    @JsonProperty("GiayToXe")
    private String giayToXe;

    @Column(name = "GIACHOTHUE")
    @JsonProperty("GiaChoThue")
    private Long giaChoThue;

    @Column(name = "THONGTINLIENQUAN")
    @JsonProperty("ThongTinLienQuan")
    private String thongTinLienQuan;

    @Column(name = "DIEUKHOAN")
    @JsonProperty("DieuKhoan")
    private String dieuKhoan;

    @ManyToOne
    @JoinColumn(name = "MATK") 
    private User user;

	public Long getMaXe() {
		return maXe;
	}

	public void setMaXe(Long maXe) {
		this.maXe = maXe;
	}

	public String getThongTinXe() {
		return thongTinXe;
	}

	public void setThongTinXe(String thongTinXe) {
		this.thongTinXe = thongTinXe;
	}

	public String getChoNgoi() {
		return choNgoi;
	}

	public void setChoNgoi(String choNgoi) {
		this.choNgoi = choNgoi;
	}

	public Double getNhienLieuThu() {
		return nhienLieuThu;
	}

	public void setNhienLieuThu(Double nhienLieuThu) {
		this.nhienLieuThu = nhienLieuThu;
	}

	public String getLoaiNhienLieu() {
		return loaiNhienLieu;
	}

	public void setLoaiNhienLieu(String loaiNhienLieu) {
		this.loaiNhienLieu = loaiNhienLieu;
	}

	public String getHopSo() {
		return hopSo;
	}

	public void setHopSo(String hopSo) {
		this.hopSo = hopSo;
	}

	public Long getGia() {
		return gia;
	}

	public void setGia(Long gia) {
		this.gia = gia;
	}

	public String getMoTa() {
		return moTa;
	}

	public void setMoTa(String moTa) {
		this.moTa = moTa;
	}

	public String getDanhGia() {
		return danhGia;
	}

	public void setDanhGia(String danhGia) {
		this.danhGia = danhGia;
	}

	public String getViTri() {
		return viTri;
	}

	public void setViTri(String viTri) {
		this.viTri = viTri;
	}

	public byte[] getAnh() {
		return anh;
	}

	public void setAnh(byte[] anh) {
		this.anh = anh;
	}

	public String getTrangThai() {
		return trangThai;
	}

	public void setTrangThai(String trangThai) {
		this.trangThai = trangThai;
	}

	public Integer getLuotChoThue() {
		return luotChoThue;
	}

	public void setLuotChoThue(Integer luotChoThue) {
		this.luotChoThue = luotChoThue;
	}

	public Integer getLuotDanhGia() {
		return luotDanhGia;
	}

	public void setLuotDanhGia(Integer luotDanhGia) {
		this.luotDanhGia = luotDanhGia;
	}

	public Double getDanhGiaTrungBinh() {
		return danhGiaTrungBinh;
	}

	public void setDanhGiaTrungBinh(Double danhGiaTrungBinh) {
		this.danhGiaTrungBinh = danhGiaTrungBinh;
	}

	public String getGiayToXe() {
		return giayToXe;
	}

	public void setGiayToXe(String giayToXe) {
		this.giayToXe = giayToXe;
	}

	public Long getGiaChoThue() {
		return giaChoThue;
	}

	public void setGiaChoThue(Long giaChoThue) {
		this.giaChoThue = giaChoThue;
	}

	public String getThongTinLienQuan() {
		return thongTinLienQuan;
	}

	public void setThongTinLienQuan(String thongTinLienQuan) {
		this.thongTinLienQuan = thongTinLienQuan;
	}

	public String getDieuKhoan() {
		return dieuKhoan;
	}

	public void setDieuKhoan(String dieuKhoan) {
		this.dieuKhoan = dieuKhoan;
	}

	public User getTaiKhoan() {
		return user;
	}

	public void setTaiKhoan(User user) {
		this.user = user;
	}
    
    

    
}
