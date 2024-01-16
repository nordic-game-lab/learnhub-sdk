# NordicGameLabApi.DefaultApi

All URIs are relative to *https://api.nordicgamelab.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2UserDelete**](DefaultApi.md#v2UserDelete) | **DELETE** /v2/user | https://api.nordicgamelab.org/v2/user?email&#x3D;{{email}}
[**v2UserGet**](DefaultApi.md#v2UserGet) | **GET** /v2/user | https://api.nordicgamelab.org/v2/user?email&#x3D;{email}
[**v2UserPost**](DefaultApi.md#v2UserPost) | **POST** /v2/user | https://api.nordicgamelab.org/v2/user

<a name="v2UserDelete"></a>
# **v2UserDelete**
> v2UserDelete(opts)

https://api.nordicgamelab.org/v2/user?email&#x3D;{{email}}

### Example
```javascript
import {NordicGameLabApi} from 'nordic_game_lab_api';
let defaultClient = NordicGameLabApi.ApiClient.instance;


let apiInstance = new NordicGameLabApi.DefaultApi();
let opts = { 
  'email': "email_example" // String | 
};
apiInstance.v2UserDelete(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v2UserGet"></a>
# **v2UserGet**
> v2UserGet(opts)

https://api.nordicgamelab.org/v2/user?email&#x3D;{email}

### Example
```javascript
import {NordicGameLabApi} from 'nordic_game_lab_api';
let defaultClient = NordicGameLabApi.ApiClient.instance;


let apiInstance = new NordicGameLabApi.DefaultApi();
let opts = { 
  'email': "email_example" // String | 
};
apiInstance.v2UserGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v2UserPost"></a>
# **v2UserPost**
> v2UserPost(opts)

https://api.nordicgamelab.org/v2/user

### Example
```javascript
import {NordicGameLabApi} from 'nordic_game_lab_api';
let defaultClient = NordicGameLabApi.ApiClient.instance;


let apiInstance = new NordicGameLabApi.DefaultApi();
let opts = { 
  'body': null // Object | 
};
apiInstance.v2UserPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

