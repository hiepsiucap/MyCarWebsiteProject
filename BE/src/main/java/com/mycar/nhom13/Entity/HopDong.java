package com.mycar.nhom13.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "HOP_DONG")
@JsonAutoDetect(fieldVisibility=JsonAutoDetect.Visibility.ANY, getterVisibility=JsonAutoDetect.Visibility.NONE,
        setterVisibility=JsonAutoDetect.Visibility.NONE, creatorVisibility=JsonAutoDetect.Visibility.NONE)
public class HopDong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MAHD")
    @JsonProperty("MAHD")
    private long MaHD;

    @Column(name="SOHD")
    @JsonProperty("SOHD")
//    @ManyToOne
//    @JoinColumn(name="HOA_DON")
    private long SoHD;

    @Column(name = "BENA")
    @JsonProperty("BENA")
    private String BenA;

    @Column(name = "BENB")
    @JsonProperty("BENB")
    private String BenB;

    @Column(name = "NGAYLAPHOPDONG")
    @JsonProperty("NGAYLAPHOPDONG")
    private LocalDate NgayLapHopDong;

    @Column(name = "NDHD")
    @JsonProperty("NDHD")
    private String NDHD;

    public HopDong() {
    }

    public HopDong(long maHD, long soHD, String benA, String benB, LocalDate ngayLapHopDong, String NDHD) {
        MaHD = maHD;
        SoHD = soHD;
        BenA = benA;
        BenB = benB;
        NgayLapHopDong = ngayLapHopDong;
        this.NDHD = NDHD;
    }

    public long getMaHD() {
        return MaHD;
    }

    public void setMaHD(long maHD) {
        MaHD = maHD;
    }

    public long getSoHD() {
        return SoHD;
    }

    public void setSoHD(long soHD) {
        SoHD = soHD;
    }

    public String getBenA() {
        return BenA;
    }

    public void setBenA(String benA) {
        BenA = benA;
    }

    public String getBenB() {
        return BenB;
    }

    public void setBenB(String benB) {
        BenB = benB;
    }

    public LocalDate getNgayLapHopDong() {
        return NgayLapHopDong;
    }

    public void setNgayLapHopDong(LocalDate ngayLapHopDong) {
        NgayLapHopDong = ngayLapHopDong;
    }

    public String getNDHD() {
        return NDHD;
    }

    public void setNDHD(String NDHD) {
        this.NDHD = NDHD;
    }

    @Override
    public String toString() {
        return "HopDong{" +
                "MaHD=" + MaHD +
                ", SoHD=" + SoHD +
                ", BenA='" + BenA + '\'' +
                ", BenB='" + BenB + '\'' +
                ", NgayLapHopDong=" + NgayLapHopDong +
                ", NDHD='" + NDHD + '\'' +
                '}';
    }
}
