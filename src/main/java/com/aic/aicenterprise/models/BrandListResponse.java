package com.aic.aicenterprise.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BrandListResponse extends BaseResponse<List<String>> {

    @Builder
    public BrandListResponse(int status, String error, String msg, List<String> payload) {
        super(status, error, msg, payload);
    }

}
