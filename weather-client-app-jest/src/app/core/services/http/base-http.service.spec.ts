// // NG
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// // VENDOR
// import { Observable, of } from 'rxjs';

// // APP
// import { HttpModule, BaseHttpService } from '@core/services/http/';

// describe('BaseHttpService', () => {
// 	beforeEach(async () => {

// 		TestBed.configureTestingModule({
// 			imports: [
// 				HttpModule.forRoot(),
// 				HttpClientTestingModule
// 			],
// 			providers: [
// 				BaseHttpService,
// 				HttpClient
// 			],
// 		});

// 	});

// 	beforeEach(() => {
// 		this.http = TestBed.get(HttpClient);
// 		this.service = TestBed.get(BaseHttpService);
// 		this.httpMock = TestBed.get(HttpTestingController);
// 	});

// 	describe('verify constructor', () => {
// 		it('verify http defined', () => {
// 			expect(this.service.http).toBeDefined();
// 		});

// 		it('verify headers defined', () => {
// 			expect(this.service.headers).toBeDefined();
// 		});

// 		it('verify injector defined', () => {
// 			expect(this.service.injector).toBeDefined();
// 		});
// 	});

// 	describe('verify properties', () => {
// 		it('verify base API URL', () => {
// 			expect(this.service.baseUrl).toBe('/siqapi/');
// 		});
// 	});

// 	describe('verify methods', () => {

// 		beforeEach(() => {
// 			this.url = 'fakeUrl';

// 			this.headers = new HttpHeaders()
// 				.append('Content-Type', 'application/json');

// 			this.body = {obj: '55'};

// 			this.expectedParams = new HttpParams()
// 				.append('obj', '3');
// 		});

// 		describe('get method', () => {
// 			describe('default parameters', () => {
// 				beforeEach(() => {

// 					jest.spyOn(this.http, 'get').mockImplementation(() => {
// 						return of<Response>();
// 					});

// 					// make call to a fake URL
// 					this.expectedRusult = this.service.get(this.url)
// 						.subscribe();

// 				});

// 				it('should call to http get method with correct parameters', () => {
// 					expect(this.http.get).toHaveBeenCalledWith(this.service.baseUrl + this.url, {
// 						headers: this.headers,
// 						params: new HttpParams(),
// 					});
// 				});

// 				it('should return correct type', () => {
// 					expect(this.expectedRusult as Observable<Response>).not.toBeNull();
// 				});
// 			});
// 			describe('with parameters', () => {
// 				beforeEach(() => {

// 					jest.spyOn(this.http, 'get').mockImplementation(() => {
// 						return of<Response>();
// 					});

// 					// make call to a fake URL
// 					this.expectedRusult = this.service.get(this.url, {obj: '3'})
// 						.subscribe();

// 				});

// 				it('should call to http get method with correct parameters', () => {
// 					expect(this.http.get).toHaveBeenCalledWith(this.service.baseUrl + this.url, {
// 						headers: this.headers,
// 						params: this.expectedParams,
// 					});
// 				});

// 				it('should return correct type', () => {
// 					expect(this.expectedRusult as Observable<Response>).not.toBeNull();
// 				});
// 			});

// 		});

// 		describe('post method', () => {
// 			beforeEach(() => {

// 				jest.spyOn(this.http, 'post').mockImplementation(() => {
// 					return of<Response>();
// 				});

// 				// make call to a fake URL
// 				this.expectedRusult = this.service.post(this.url, this.body, {obj: '3'})
// 					.subscribe();

// 			});

// 			it('should call to http post method with correct parameters', () => {
// 				expect(this.http.post).toHaveBeenCalledWith(this.service.baseUrl + this.url, this.body, {
// 					headers: this.headers,
// 					params: this.expectedParams,
// 				});
// 			});

// 			it('should return correct type', () => {
// 				expect(this.expectedRusult as Observable<Response>).not.toBeNull();
// 			});
// 		});

// 		describe('put method', () => {
// 			beforeEach(() => {

// 				jest.spyOn(this.http, 'put').mockImplementation(() => {
// 					return of<Response>();
// 				});

// 				// make call to a fake URL
// 				this.expectedRusult = this.service.put(this.url, this.body, {obj: '3'})
// 					.subscribe();

// 			});

// 			it('should call to http put method with correct parameters', () => {
// 				expect(this.http.put).toHaveBeenCalledWith(this.service.baseUrl + this.url, this.body, {
// 					headers: this.headers,
// 					params: this.expectedParams,
// 				});
// 			});

// 			it('should return correct type', () => {
// 				expect(this.expectedRusult as Observable<Response>).not.toBeNull();
// 			});
// 		});

// 		describe('patch method', () => {
// 			beforeEach(() => {

// 				jest.spyOn(this.http, 'patch').mockImplementation(() => {
// 					return of<Response>();
// 				});

// 				// make call to a fake URL
// 				this.expectedRusult = this.service.patch(this.url, this.body, {obj: '3'})
// 					.subscribe();

// 			});

// 			it('should call to http patch method with correct parameters', () => {
// 				expect(this.http.patch).toHaveBeenCalledWith(this.service.baseUrl + this.url, this.body, {
// 					headers: this.headers,
// 					params: this.expectedParams,
// 				});
// 			});

// 			it('should return correct type', () => {
// 				expect(this.expectedRusult as Observable<Response>).not.toBeNull();
// 			});
// 		});

// 		describe('delete method', () => {
// 			beforeEach(() => {

// 				jest.spyOn(this.http, 'delete').mockImplementation(() => {
// 					return of<Response>();
// 				});

// 				// make call to a fake URL
// 				this.expectedRusult = this.service.delete(this.url, {obj: '3'})
// 					.subscribe();

// 			});

// 			it('should call to http delete method with correct parameters', () => {
// 				expect(this.http.delete).toHaveBeenCalledWith(this.service.baseUrl + this.url, {
// 					headers: this.headers,
// 					params: this.expectedParams,
// 				});
// 			});

// 			it('should return correct type', () => {
// 				expect(this.expectedRusult as Observable<Response>).not.toBeNull();
// 			});
// 		});
// 	});

// });
