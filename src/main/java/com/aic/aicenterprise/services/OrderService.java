package com.aic.aicenterprise.services;

import com.aic.aicenterprise.entities.Order;
import com.aic.aicenterprise.entities.UserCart;

import java.util.List;

public interface OrderService {
    boolean placeOrder(UserCart userCart);

    List<Order> getOrderHistory(String email);
}
