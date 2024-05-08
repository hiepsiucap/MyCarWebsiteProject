package com.mycar.nhom13.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="TAI_KHOAN")
@JsonAutoDetect(fieldVisibility=JsonAutoDetect.Visibility.ANY, getterVisibility=JsonAutoDetect.Visibility.NONE,
        setterVisibility=JsonAutoDetect.Visibility.NONE, creatorVisibility=JsonAutoDetect.Visibility.NONE)
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MATK")
    @JsonProperty("MaTK")
    private long MaTK;
    @Column(name="TENTK")
    @JsonProperty("TenTK")
    private String TenTK;
    @Column(name="MATKHAU")
    @JsonProperty("MatKhau")
    private String MatKhau;
    @Column(name="HOTEN")
    @JsonProperty("HoTen")
    private String HoTen;
    @Column(name="SDT")
    @JsonProperty("SDT")
    private String SDT;
    @Column(name="NGAYTAOTK")
    @JsonProperty("NgayTaoTK")
    private LocalDate NgayTaoTK;
    @Column(name="NAMSINH")
    @JsonProperty("NamSinh")
    private Integer NamSinh;
    @Column(name="CCCD")
    @JsonProperty("CCCD")
    private String CCCD;

    public TaiKhoan(){

    }

    public TaiKhoan(Integer maTK, String tenTK, String matKhau, String hoTen, String SDT, LocalDate ngayTaoTK, int namSinh, String CCCD) {
        MaTK = maTK;
        TenTK = tenTK;
        MatKhau = matKhau;
        HoTen = hoTen;
        this.SDT = SDT;
        NgayTaoTK = ngayTaoTK;
        NamSinh = namSinh;
        this.CCCD = CCCD;
    }

    public long getMaTK() {
        return MaTK;
    }


    public String getTenTK() {
        return TenTK;
    }


    public String getMatKhau() {
        return MatKhau;
    }

    public void setMatKhau(String matKhau) {
        MatKhau = matKhau;
    }

    public String getHoTen() {
        return HoTen;
    }

    public void setHoTen(String hoTen) {
        HoTen = hoTen;
    }

    public String getSDT() {
        return SDT;
    }

    public void setSDT(String SDT) {
        this.SDT = SDT;
    }

    public LocalDate getNgayTaoTK() {
        return NgayTaoTK;
    }

    public void setNgayTaoTK(LocalDate ngayTaoTK) {
        NgayTaoTK = ngayTaoTK;
    }

    public int getNamSinh() {
        return NamSinh;
    }

    public void setNamSinh(int namSinh) {
        NamSinh = namSinh;
    }

    public String getCCCD() {
        return CCCD;
    }

    public void setCCCD(String CCCD) {
        this.CCCD = CCCD;
    }

    @Override
    public String toString() {
        return "TaiKhoan{" +
                "MaTK=" + MaTK +
                ", TenTK='" + TenTK + '\'' +
                ", MatKhau='" + MatKhau + '\'' +
                ", HoTen='" + HoTen + '\'' +
                ", SDT='" + SDT + '\'' +
                ", NgayTaoTK=" + NgayTaoTK +
                ", NamSinh=" + NamSinh +
                ", CCCD='" + CCCD + '\'' +
                '}';
    }
}
