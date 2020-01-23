import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
export default class RequestBuilder {
    static async makeCall(url, params = {}) {
        try {                                    
            let response = await fetch(url, params);
            if (response.status !== 401) {
                console.log("@response", response.json())
                return response;
            }
        } catch (error) {
        }
    }
}