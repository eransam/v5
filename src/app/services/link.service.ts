import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(private http: HttpClient) {}

  getGrowerByMsvkSelect(msvkCode, growerID, settlementID, fromDate, toDate) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getGrowerByMsvkSelect?msvkCode=${msvkCode}&growerID=${growerID}&settlementID=${settlementID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getFarmByMsvkSelect(msvkCode, farmID, settlementID, isSortSelf) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getFarmByMsvkSelect?msvkCode=${msvkCode}&farmID=${farmID}&settlementID=${settlementID}&isSortSelf=${isSortSelf}`
    );
  }

  getFarmByOved(ovedID, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getFarmByOved?ovedID=${ovedID}&msvkCode=${msvkCode}`
    );
  }

  getCarAndDriverByMsvkSelect(
    msvkCode,
    driverID,
    carNumber,
    carTypeID,
    carManufactor,
    isCertificateTogheter,
    statusID
  ) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getCarAndDriverByMsvkSelect?msvkCode=${msvkCode}&driverID=${driverID}&carNumber=${carNumber}&carTypeID=${carTypeID}&carManufactor=${carManufactor}&isCertificateTogheter=${isCertificateTogheter}&statusID=${statusID}`
    );
  }

  carInsert(
    carNumber,
    carTypeID,
    carManufacturID,
    modifiedBy,
    year,
    colorID,
    carModelID
  ) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/carInsert?carNumber=${carNumber}&carTypeID=${carTypeID}&carManufacturID=${carManufacturID}&modifiedBy=${modifiedBy}&year=${year}&colorID=${colorID}&carModelID=${carModelID}`
    );
  }

  getCarAndDriverByMsvkInsert(
    msvkCode,
    driverID,
    carNumber,
    carTypeID,
    carManufactor
  ) {
    console.log(
      `${environment.apiPath}/LinkService.asmx/getCarAndDriverByMsvkInsert?msvkCode=${msvkCode}&driverID=${driverID}&carNumber=${carNumber}&carTypeID=${carTypeID}&carManufactor=${carManufactor}`
    );

    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getCarAndDriverByMsvkSelect?msvkCode=${msvkCode}&driverID=${driverID}&carNumber=${carNumber}&carTypeID=${carTypeID}&carManufactor=${carManufactor}`
    );
  }

  getEggWareHouseFactory(msvkCode, eggFactoryID, isCertificateTogheter) {
    console.log(
      `${environment.apiPath}/LinkService.asmx/getEggWareHouseFactory?msvkCode=${msvkCode}&eggFactoryID=${eggFactoryID}&isCertificateTogheter=${isCertificateTogheter}`
    );
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getEggWareHouseFactory?msvkCode=${msvkCode}&eggFactoryID=${eggFactoryID}&isCertificateTogheter=${isCertificateTogheter}`
    );
  }

  getOvdimDetails(ovedID) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getOvdimDetails?ovedID=${ovedID}`
    );
  }

  getGrowerDetails(growerID) {
    console.log('growerID in the req: ', growerID);
    console.log('typeof growerID in the req: ', typeof growerID);

    return this.http.get<any>(
      `${
        environment.apiPath
      }growerService.asmx/getGrowerDetails?growerID=${growerID.toString()}`
    );
  }

  driverEggInsert(lastName, firstName, idNo, mobilePhone, userID, carID) {
    console.log(
      `${environment.apiPath}/LinkService.asmx/driverEggInsert?lastName=${lastName}&firstName=${firstName}&idNo=${idNo}&mobilePhone=${mobilePhone}&userID=${userID}&carID=${carID}`
    );
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/driverEggInsert?lastName=${lastName}&firstName=${firstName}&idNo=${idNo}&mobilePhone=${mobilePhone}&userID=${userID}&carID=${carID}`
    );
  }

  driverInsertCheck(idNumber) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/driverInsertCheck?idNumber=${idNumber}`
    );
  }

  carInsertCheck(carNumber) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/carInsertCheck?carNumber=${carNumber}`
    );
  }

  carEggInsert(
    carNumber,
    carTypeID,
    carManufacturID,
    prodctionYear,
    colorID,
    carModelID,
    userID
  ) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/carEggInsert?carNumber=${carNumber}&carTypeID=${carTypeID}&carManufacturID=${carManufacturID}&prodctionYear=${prodctionYear}&colorID=${colorID}&carModelID=${carModelID}&userID=${userID}`
    );
  }

  deleteDriver(id, reasonText, userID) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/deleteDriver?id=${id}&reasonText=${reasonText}&userID=${userID}`
    );
  }

  getQuarantine(
    farmID,
    settlementID,
    statusID,
    slaughterID,
    quarantineNumber,
    quarantineTypeID,
    fromDate,
    toDate,
    quarantineID,
    msvkCode
  ) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/getQuarantine?farmID=${farmID}&settlementID=${settlementID}&statusID=${statusID}&slaughterID=${slaughterID}&quarantineNumber=${quarantineNumber}&quarantineTypeID=${quarantineTypeID}&fromDate=${fromDate}&toDate=${toDate}&quarantineID=${quarantineID}&msvkCode=${msvkCode}`
    );
  }

  updateOvdimUsernamePassword(ovedID, userName, password) {
    return this.http.get<any>(
      `${environment.apiPath}/LinkService.asmx/updateOvdimUsernamePassword?ovedID=${ovedID}&userName=${userName}&password=${password}`
    );
  }
}
