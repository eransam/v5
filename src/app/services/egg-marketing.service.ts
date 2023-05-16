import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EggMarketingService {
  constructor(private http: HttpClient) {}

  getCarsByDriverID(driverID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCarsByDriverID?driverID=${driverID}`
    );
  }
  getPackageSelectAll(certificateID, statusIDs) {
    console.log(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageSelectAll?certificateID=${certificateID}&statusIDs=${statusIDs}`
    );
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageSelectAll?certificateID=${certificateID}&statusIDs=${statusIDs}`
    );
  }

  getFarmReportSelect(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getFarmReportSelect?msvkCode=${msvkCode}`
    );
  }

  getFarmReportGroupSelect(msvkCode, rangeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getFarmReportGroupSelect?msvkCode=${msvkCode}&rangeID=${rangeID}`
    );
  }

  getInventorySelect(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getInventorySelect?msvkCode=${msvkCode}`
    );
  }

  getFarmByEggWarehouseID(ovedID, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getFarmByEggWarehouseID?ovedID=${ovedID}&msvkCode=${msvkCode}`
    );
  }

  getPackageSelectInEggWarehouse(eggWarehouseID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageSelectInEggWarehouse?eggWarehouseID=${eggWarehouseID}`
    );
  }

  getFarmByEggWarehouseIncomeSelect(ovedID, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getFarmByEggWarehouseIncomeSelect?ovedID=${ovedID}&msvkCode=${msvkCode}`
    );
  }

  getPackageByCertificate(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageByCertificate?certificateID=${certificateID}`
    );
  }

  getCertificateTogetherMax(msvkCode, eggWarehouseID, eggWarehouseCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateTogetherMax?msvkCode=${msvkCode}&eggWarehouseID=${eggWarehouseID}&eggWarehouseCode=${eggWarehouseCode}`
    );
  }

  getEggFactoryDaySelect(
    certificateID,
    eggFactoryID,
    farmID,
    henHouseID,
    flockID,
    fromDate,
    toDate,
    ovedID
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryDaySelect?certificateID=${certificateID}&eggFactoryID=${eggFactoryID}&farmID=${farmID}&henHouseID=${henHouseID}&flockID=${flockID}&fromDate=${fromDate}&toDate=${toDate}&ovedID=${ovedID}`
    );
  }

  getEggFactoryDaySelectLog(ID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryDaySelectLog?ID=${ID}`
    );
  }

  getEggFactoryDayInsert(
    certificateID,
    eggFactoryID,
    farmID,
    henHouseID,
    henHouseNum,
    day,
    eggSum
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryDayInsert?certificateID=${certificateID}&eggFactoryID=${eggFactoryID}&farmID=${farmID}&henHouseID=${henHouseID}&henHouseNum=${henHouseNum}&day=${day}&eggSum=${eggSum}`
    );
  }

  getEggFactoryDayUpdate(id, eggNumber, updateReason, updateBy) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryDayUpdate?id=${id}&eggNumber=${eggNumber}&updateReason=${updateReason}&updateBy=${updateBy}`
    );
  }
  getEggFactoryDayDeleted(id, deletedBy, deletedReason) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryDayDeleted?id=${id}&deletedBy=${deletedBy}&deletedReason=${deletedReason}`
    );
  }

  getFarmByrangeID(rangeID, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getFarmByrangeID?rangeID=${rangeID}&msvkCode=${msvkCode}`
    );
  }

  getRangeDashboard(rangeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getRangeDashboard?rangeID=${rangeID}`
    );
  }

  getRangeSelect(msvkCode, rangeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getRangeSelect?msvkCode=${msvkCode}&rangeID=${rangeID}`
    );
  }

  getPartner(farmID, flockID, lull2000Code) {
    console.log(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPartner?farmID=${farmID}&flockID=${flockID}&lull2000Code=${lull2000Code}`
    );
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPartner?farmID=${farmID}&flockID=${flockID}&lull2000Code=${lull2000Code}`
    );
  }

  getAlertPackageNotIncomeReport(
    statusID,
    eggFactoryID,
    msvkCode,
    farmID,
    statusIDReason,
    rangeID,
    fromDate,
    toDate
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getAlertPackageNotIncomeReport?statusID=${statusID}&eggFactoryID=${eggFactoryID}&msvkCode=${msvkCode}&farmID=${farmID}&statusIDReason=${statusIDReason}&rangeID=${rangeID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getReportInvestigate(
    statusID,
    msvkCode,
    growerID,
    farmID,
    eggFactoryID,
    fromDate,
    toDate,
    statusReasonID,
    rangeID
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportInvestigate?statusID=${statusID}&msvkCode=${msvkCode}&growerID=${growerID}&farmID=${farmID}&eggFactoryID=${eggFactoryID}&fromDate=${fromDate}&toDate=${toDate}&statusReasonID=${statusReasonID}&rangeID=${rangeID}`
    );
  }

  getInvestigateTypeReason() {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getInvestigateTypeReason`
    );
  }

  investigateReasonUpdatePackage(
    certificateID,
    investigateTypeID,
    investigateTypeReasonID,
    reasonText,
    closeBy,
    closeName
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/investigateReasonUpdatePackage?certificateID=${certificateID}&investigateTypeID=${investigateTypeID}&investigateTypeReasonID=${investigateTypeReasonID}&reasonText=${reasonText}&closeBy=${closeBy}&closeName=${closeName}`
    );
  }

  getAlertNotArrive(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getAlertNotArrive?msvkCode=${msvkCode}`
    );
  }

  getReportPackageMarketing(
    msvkCode,
    transferStatusID,
    settlementID,
    farmID,
    henHouseID,
    growerID,
    fromDate,
    toDate,
    certificateTogetherID,
    eggWarehouseID,
    rangeID,
    isStatusDate,
    isSelfGrower,
    isUnloaded
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportPackageMarketing?msvkCode=${msvkCode}&transferStatusID=${transferStatusID}&settlementID=${settlementID}&farmID=${farmID}&henHouseID=${henHouseID}&growerID=${growerID}&fromDate=${fromDate}&toDate=${toDate}&certificateTogetherID=${certificateTogetherID}&eggWarehouseID=${eggWarehouseID}&rangeID=${rangeID}&isStatusDate=${isStatusDate}&isSelfGrower=${isSelfGrower}&isUnloaded=${isUnloaded}`
    );
  }

  getReportGrowerSplit(
    growerID,
    msvkCode,
    farmID,
    fromDate,
    toDate,
    eggFactoryID
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportGrowerSplit?msvkCode=${msvkCode}&growerID=${growerID}&eggFactoryID=${eggFactoryID}&farmID=${farmID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getOvedByFarm(farmID, departmentID, henHouseID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getOvedByFarm?farmID=${farmID}&departmentID=${departmentID}&henHouseID=${henHouseID}`
    );
  }

  getOvedByFarmLink(farmID, departmentID, henHouseID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getOvedByFarmLink?farmID=${farmID}&departmentID=${departmentID}&henHouseID=${henHouseID}`
    );
  }

  growerSplitUpdateMsvk(
    farmCode,
    henHouseID,
    certificteID,
    newMsvkCode,
    newMsvkName,
    isChangeAfterPay,
    isChangeSplit
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/growerSplitUpdateMsvk?farmCode=${farmCode}&henHouseID=${henHouseID}&certificteID=${certificteID}&newMsvkCode=${newMsvkCode}&newMsvkName=${newMsvkName}&isChangeAfterPay=${isChangeAfterPay}&isChangeSplit=${isChangeSplit}`
    );
  }

  getReportGrowerSplitDetails(
    msvkCode,
    growerID,
    farmID,
    settlementID,
    henHouseID,
    fromDate,
    toDate,
    certificateTogetherID,
    rangeID
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportGrowerSplitDetails?msvkCode=${msvkCode}&growerID=${growerID}&farmID=${farmID}&settlementID=${settlementID}&henHouseID=${henHouseID}&fromDate=${fromDate}&toDate=${toDate}&certificateTogetherID=${certificateTogetherID}&rangeID=${rangeID}`
    );
  }

  getReportPackageSplit(
    msvkCode,
    settlementID,
    growerID,
    certificateID,
    fromDate,
    toDate
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportPackageSplit?msvkCode=${msvkCode}&settlementID=${settlementID}&growerID=${growerID}&certificateID=${certificateID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getReportInstall(msvkCode, farmID, growerID, settlementID, fromDate, toDate) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportInstall?msvkCode=${msvkCode}&farmID=${farmID}&growerID=${growerID}&settlementID=${settlementID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getReportPackageActionTwiceLogSelect(certificateID, fromDate, toDate) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportPackageActionTwiceLogSelect?certificateID=${certificateID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getReportFarmNotMarket(dayParam) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportFarmNotMarket?dayParam=${dayParam}`
    );
  }

  getCertificateDuplicate(
    fromDate,
    toDate,
    periodSecond,
    isAllDay,
    order,
    msvkCode
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateDuplicate?fromDate=${fromDate}&toDate=${toDate}&periodSecond=${periodSecond}&isAllDay=${isAllDay}&order=${order}&msvkCode=${msvkCode}`
    );
  }

  getCertificateByCertificateIDs(certificateIDs) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateByCertificateIDs?certificateIDs=${certificateIDs}`
    );
  }

  getEggFactoryDetailsSelect(
    msvkCode,
    EggFactoryID,
    farmID,
    rangeID,
    henHouseID,
    growerID,
    fromDate,
    toDate
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryDetailsSelect?msvkCode=${msvkCode}&EggFactoryID=${EggFactoryID}&farmID=${farmID}&rangeID=${rangeID}&henHouseID=${henHouseID}&growerID=${growerID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getEggFactoryListSelect(
    msvkCode,
    ovedID,
    farmID,
    growerID,
    fromDate,
    toDate
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryListSelect?msvkCode=${msvkCode}&ovedID=${ovedID}&farmID=${farmID}&growerID=${growerID}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }
  getMsvkQuarantineCount(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getMsvkQuarantineCount?msvkCode=${msvkCode}`
    );
  }
  getQuarantineByMsvkCode(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getQuarantineByMsvkCode?msvkCode=${msvkCode}`
    );
  }
  getCarAndDriver(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCarAndDriver?certificateID=${certificateID}`
    );
  }
  getPackageDetailsSelect(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageDetailsSelect?certificateID=${certificateID}`
    );
  }
  getPackageSelectByCertificateID(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageSelectByCertificateID?certificateID=${certificateID}`
    );
  }

  getCertificateUndoSelect(certificateID, transferDesc) {
    console.log(
      '`${environment.apiPathEggMmovments}/EggService.asmx/getCertificateUndoSelect?certificateID=${certificateID}&transferDesc=${transferDesc}`' +
        `${environment.apiPathEggMmovments}/EggService.asmx/getCertificateUndoSelect?certificateID=${certificateID}&transferDesc=${transferDesc}`
    );
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateUndoSelect?certificateID=${certificateID}&transferDesc=${transferDesc}`
    );
  }

  getCertificateTimeLine(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateTimeLine?certificateID=${certificateID}`
    );
  }

  getCertificateTogetherTimeLine(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateTogetherTimeLine?certificateID=${certificateID}`
    );
  }

  getCertificateTimeLineEggWarehouse(eggWarehouseID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateTimeLineEggWarehouse?eggWarehouseID=${eggWarehouseID}`
    );
  }

  getContactPersonFarmHatala(yzrn) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getContactPersonFarmHatala?yzrn=${yzrn}`
    );
  }
  getEggDashboardCount(fromDate, toDate, farmID, growerID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggDashboardCount?fromDate=${fromDate}&toDate=${toDate}&farmID=${farmID}&growerID=${growerID}`
    );
  }

  getPackageReportDashboard(eggFactoryID, msvkCode, rangeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageReportDashboard?eggFactoryID=${eggFactoryID}&msvkCode=${msvkCode}&rangeID=${rangeID}`
    );
  }

  getInvestigateGroup(fromDate, toDate, msvkCode, rangeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getInvestigateGroup?fromDate=${fromDate}&toDate=${toDate}&msvkCode=${msvkCode}&rangeID=${rangeID}`
    );
  }

  getPackageFarmDetails(flockID, henHouseID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageFarmDetails?flockID=${flockID}&henHouseID=${henHouseID}`
    );
  }

  getCertificateMax(farmID, lul2000Code) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateMax?farmID=${farmID}&lul2000Code=${lul2000Code}`
    );
  }

  getDriverFarmStickerList(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getDriverFarmStickerList?certificateID=${certificateID}`
    );
  }

  getDriverFarmStickerListDetails(certificateID, certificateIDs) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getDriverFarmStickerListDetails?certificateID=${certificateID}&certificateIDs=${certificateIDs}`
    );
  }

  getPackageSelectByCertificateTogether(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageSelectByCertificateTogether?certificateID=${certificateID}`
    );
  }

  getPartnerSplitByFarm(farmID, lull2000Code, eggSum) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPartnerSplitByFarm?farmID=${farmID}&lull2000Code=${lull2000Code}&eggSum=${eggSum}`
    );
  }

  getEggFactoryByMsvk(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggFactoryByMsvk?msvkCode=${msvkCode}`
    );
  }

  getCertificateTimeLineOther(certificateID, deliveryID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateTimeLineOther?certificateID=${certificateID}&deliveryID=${deliveryID}`
    );
  }

  getFarmByMsvkDayReport(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getFarmByMsvkDayReport?msvkCode=${msvkCode}`
    );
  }

  packageMsvkUpdate(
    certificateTogetherID,
    certificateID,
    oldCode,
    oldName,
    newCode,
    newName,
    isUpdateMsvk,
    modified_by,
    modified_name,
    comments
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/packageMsvkUpdate?certificateTogetherID=${certificateTogetherID}&certificateID=${certificateID}&oldCode=${oldCode}&oldName=${oldName}&newCode=${newCode}&newName=${newName}&isUpdateMsvk=${isUpdateMsvk}&modified_by=${modified_by}&modified_name=${modified_name}&comments=${comments}`
    );
  }

  reportPackageBetweenEggFactory(
    currectEggFactoryID,
    fromEggFactoryID,
    toEggFactoryID,
    fromDate,
    toDate,
    msvkCode
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/reportPackageBetweenEggFactory?currectEggFactoryID=${currectEggFactoryID}&fromEggFactoryID=${fromEggFactoryID}&toEggFactoryID=${toEggFactoryID}&fromDate=${fromDate}&toDate=${toDate}&msvkCode=${msvkCode}`
    );
  }

  packageBetweenEggFactorySelect(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/packageBetweenEggFactorySelect?certificateID=${certificateID}`
    );
  }

  getReportCertificateEggRevia(
    certificateID,
    carNumber,
    statusID,
    certificateTypeID,
    industryID,
    hatcherID,
    farmID,
    fromDate,
    toDate,
    isActive
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportCertificateEggRevia?certificateID=${certificateID}&carNumber=${carNumber}&statusID=${statusID}&certificateTypeID=${certificateTypeID}&industryID=${industryID}&hatcherID=${hatcherID}&farmID=${farmID}&fromDate=${fromDate}&toDate=${toDate}&isActive=${isActive}`
    );
  }

  certificateEggReviaDeletedLogInsert(
    certificateID,
    isDeleted,
    transactionBy,
    transactionName,
    transactionReason
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/certificateEggReviaDeletedLogInsert?certificateID=${certificateID}&isDeleted=${isDeleted}&transactionBy=${transactionBy}&transactionName=${transactionName}&transactionReason=${transactionReason}`
    );
  }

  getReportCertificateEggReviaUpdate(
    certificateID,
    eggNumber,
    packageNumber,
    industryID,
    industryName,
    transitionID,
    transitionName,
    hatcherID,
    hatcherName,
    carNumber,
    draggedNumber,
    carNumberLeader
  ) {
    return this.http
      .get<any>(`${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportCertificateEggReviaUpdate?certificateID=${certificateID}
     &industryID=${industryID}&industryName=${industryName}&transitionID=${transitionID}&transitionName=${transitionName}
     &eggNumber=${eggNumber}&packageNumber=${packageNumber}
     &hatcherID=${hatcherID}&hatcherName=${hatcherName}
     &carNumber=${carNumber}&draggedNumber=${draggedNumber}
     &carNumberLeader=${carNumberLeader}
     `);
  }

  getReportCertificateEggReviaUpdateInsert(
    certificateID,
    oldIndustryID,
    industryID,
    oldIndustryName,
    industryName,
    oldTransitionID,
    transitionID,
    oldTransitionName,
    transitionName,
    oldHatcherID,
    hatcherID,
    oldHatcherName,
    hatcherName,
    oldCarNumber,
    carNumber,
    oldDraggedNumber,
    draggedNumber,
    oldCarNumberLeader,
    carNumberLeader,
    oldEggNumber,
    eggNumber,
    oldPackageNumber,
    packageNumber,
    modifiedBy,
    modifiedName,
    modifiedReason
  ) {
    return this.http
      .get<any>(`${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportCertificateEggReviaUpdateInsert?certificateID=${certificateID}
     &oldIndustryID=${oldIndustryID}&industryID=${industryID}&oldIndustryName=${oldIndustryName}&industryName=${industryName}
     &oldTransitionID=${oldTransitionID}&transitionID=${transitionID}&oldTransitionName=${oldTransitionName}&transitionName=${transitionName}
     &oldHatcherID=${oldHatcherID}&hatcherID=${hatcherID}&oldHatcherName=${oldHatcherName}&hatcherName=${hatcherName}&oldCarNumber=${oldCarNumber}&carNumber=${carNumber}&oldDraggedNumber=${oldDraggedNumber}&draggedNumber=${draggedNumber}&oldCarNumberLeader=${oldCarNumberLeader}&carNumberLeader=${carNumberLeader}&oldEggNumber=${oldEggNumber}&eggNumber=${eggNumber}&oldPackageNumber=${oldPackageNumber}&packageNumber=${packageNumber}&modifiedBy=${modifiedBy}&modifiedName=${modifiedName}&modifiedReason=${modifiedReason}`);
  }

  getReportCertificateEggReviaDetails(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportCertificateEggReviaDetails?certificateID=${certificateID}`
    );
  }

  certificateEggReviaDelete(
    id,
    oldEggNumber,
    eggNumber,
    oldPackageNumber,
    packageNumber,
    oldEggTypeName,
    eggTypeName,
    oldEggSizeName,
    eggSizeName,
    deletedBy,
    deletedName,
    comments
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/certificateEggReviaDelete?id=${id}&oldEggNumber=${oldEggNumber}&eggNumber=${eggNumber}&oldPackageNumber=${oldPackageNumber}&packageNumber=${packageNumber}&oldEggTypeName=${oldEggTypeName}&eggTypeName=${eggTypeName}&oldEggSizeName=${oldEggSizeName}&eggSizeName=${eggSizeName}&deletedBy=${deletedBy}&deletedName=${deletedName}&comments=${comments}`
    );
  }

  certificateEggReviaUpdate(
    id,
    oldEggNumber,
    eggNumber,
    oldPackageNumber,
    packageNumber,
    oldEggTypeID,
    eggTypeID,
    oldEggTypeName,
    eggTypeName,
    oldEggSizeID,
    eggSizeID,
    oldEggSizeName,
    eggSizeName,
    modifiedBy,
    modifiedName,
    comments
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/certificateEggReviaUpdate?id=${id}&oldEggNumber=${oldEggNumber}&eggNumber=${eggNumber}&oldPackageNumber=${oldPackageNumber}&packageNumber=${packageNumber}&oldEggTypeID=${oldEggTypeID}&eggTypeID=${eggTypeID}&oldEggTypeName=${oldEggTypeName}&eggTypeName=${eggTypeName}&oldEggSizeID=${oldEggSizeID}&eggSizeID=${eggSizeID}&oldEggSizeName=${oldEggSizeName}&eggSizeName=${eggSizeName}&modifiedBy=${modifiedBy}&modifiedName=${modifiedName}&comments=${comments}`
    );
  }

  getCertificateEggReviaLogSelect(id) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateEggReviaLogSelect?id=${id}`
    );
  }
  getReportCertificateEggReviaSelect(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportCertificateEggReviaSelect?certificateID=${certificateID}`
    );
  }

  getReportInspectorScan(fromDate, toDate, inspectorID, isOk) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getReportInspectorScan?fromDate=${fromDate}&toDate=${toDate}&inspectorID=${inspectorID}&isOk=${isOk}`
    );
  }

  certificateEggReviaHeader(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/certificateEggReviaHeader?certificateID=${certificateID}`
    );
  }

  certificateEggReviaLog(id) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/certificateEggReviaLog?id=${id}`
    );
  }

  certificateEggReviaDetails(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/certificateEggReviaDetails?certificateID=${certificateID}`
    );
  }

  getCertificateEggReviaTimeLine(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateEggReviaTimeLine?certificateID=${certificateID}`
    );
  }

  packageBetweenEggFactoryLogUpdate(
    certificateID,
    carNumber,
    carrigeNumber,
    surfaceNumber,
    carrigeEggSum,
    surfaceEggSum,
    modifiedBy,
    modifiedName
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/packageBetweenEggFactoryLogUpdate?certificateID=${certificateID}&carNumber=${carNumber}&carrigeNumber=${carrigeNumber}&surfaceNumber=${surfaceNumber}&carrigeEggSum=${carrigeEggSum}&surfaceEggSum=${surfaceEggSum}&modifiedBy=${modifiedBy}&modifiedName=${modifiedName}`
    );
  }

  packageBetweenEggFactoryLogInsert(
    certificateID,
    carNumberOld,
    carNumber,
    carrigeNumberOld,
    carrigeNumber,
    surfaceNumberOld,
    surfaceNumber,
    carrigeEggSumOld,
    carrigeEggSum,
    surfaceEggSumOld,
    surfaceEggSum,
    modifiedBy,
    modifiedName,
    comments
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/packageBetweenEggFactoryLogInsert?certificateID=${certificateID}&carNumberOld=${carNumberOld}&carNumber=${carNumber}&carrigeNumberOld=${carrigeNumberOld}&carrigeNumber=${carrigeNumber}&surfaceNumberOld=${surfaceNumberOld}&surfaceNumber=${surfaceNumber}&carrigeEggSumOld=${carrigeEggSumOld}&carrigeEggSum=${carrigeEggSum}&surfaceEggSumOld=${surfaceEggSumOld}&surfaceEggSum=${surfaceEggSum}&modifiedBy=${modifiedBy}&modifiedName=${modifiedName}&comments=${comments}`
    );
  }

  packageBetweenEggFactoryLogDeleted(
    certificateID,
    isDeleted,
    deletedBy,
    deletedName,
    deletedReason
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/packageBetweenEggFactoryLogDeleted?certificateID=${certificateID}&isDeleted=${isDeleted}&deletedBy=${deletedBy}&deletedName=${deletedName}&deletedReason=${deletedReason}`
    );
  }

  getCertificateBetweenEggFactoryTimeLine(certificateID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateBetweenEggFactoryTimeLine?certificateID=${certificateID}`
    );
  }

  checkIsPermitCar(carNumber, transportTypeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/checkIsPermitCar?carNumber=${carNumber}&transportTypeID=${transportTypeID}`
    );
  }

  checkIsPermitDragged(carNumber, transportTypeID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/checkIsPermitDragged?carNumber=${carNumber}&transportTypeID=${transportTypeID}`
    );
  }

  getEggReviaDashboardCount(fromDate, toDate, flockID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getEggReviaDashboardCount?fromDate=${fromDate}&toDate=${toDate}&flockID=${flockID}`
    );
  }

  getCertificateEggReviaSelect(flockID, fromDate, toDate, isDeleted) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCertificateEggReviaSelect?flockID=${flockID}&fromDate=${fromDate}&toDate=${toDate}&isDeleted=${isDeleted}`
    );
  }

  getPackageBetweenMsvk(month, year, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageBetweenMsvk?month=${month}&year=${year}&msvkCode=${msvkCode}`
    );
  }

  getPackageBetweenFromMsvk(month, year, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageBetweenFromMsvk?month=${month}&year=${year}&msvkCode=${msvkCode}`
    );
  }

  getGrowerSplitReportSelect(month, year, msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportSelect?month=${month}&year=${year}&msvkCode=${msvkCode}`
    );
  }

  getGrowerSplitReportReport(month, year, msvkCode, isWithNotReport) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportReport?month=${month}&year=${year}&msvkCode=${msvkCode}&isWithNotReport=${isWithNotReport}`
    );
  }

  getGrowerSplitReportLog(growerSplitReportID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportLog?growerSplitReportID=${growerSplitReportID}`
    );
  }

  getGrowerSplitReportIsReport(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportIsReport?msvkCode=${msvkCode}`
    );
  }

  getGrowerSplitReportIsReportByDate(msvkCode, month, year) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportIsReportByDate?msvkCode=${msvkCode}&month=${month}&year=${year}`
    );
  }

  getGrowerSplitReportIsReportAllMonth(msvkCode) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportIsReportAllMonth?msvkCode=${msvkCode}`
    );
  }

  getGrowerSplitReportInsertOutcome(
    msvkCode,
    month,
    year,
    modifiedByOutcome,
    modifiedNameOutcome,
    outEggInspection,
    outEggOrganic,
    outEggFreedom,
    outEggOmega3,
    outEggImport,
    outEggPurchase,
    outEggSaleLocalMarket,
    outEggIndustry,
    phat,
    closeStock
  ) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportInsertOutcome?msvkCode=${msvkCode}&month=${month}&year=${year}&modifiedByOutcome=${modifiedByOutcome}&modifiedNameOutcome=${modifiedNameOutcome}&outEggInspection=${outEggInspection}&outEggOrganic=${outEggOrganic}&outEggFreedom=${outEggFreedom}&outEggOmega3=${outEggOmega3}&outEggImport=${outEggImport}&outEggPurchase=${outEggPurchase}&outEggSaleLocalMarket=${outEggSaleLocalMarket}&outEggIndustry=${outEggIndustry}&closeStock=${closeStock}&phat=${phat}`
    );
  }

  getGrowerSplitReportInsert(
    msvkCode,
    month,
    year,
    modifiedByIncome,
    modifiedNameIncome,
    incomeEggInspection,
    incomeEggOrganic,
    incomeEggFreedom,
    incomeEggOmega,
    incomeEggImport,
    incomeEggPurchase,
    incomeEggFactoryIncome,
    incomeBetweenMsvkEggSum,
    modifiedByOutcome,
    modifiedNameOutcome,
    outEggInspection,
    outEggOrganic,
    outEggFreedom,
    outEggOmega3,
    outEggImport,
    outEggPurchase,
    outEggSaleLocalMarket,
    outEggIndustry,
    phat,
    outBetweenMsvkEggSum,
    closeStock,
    isUpdate,
    isAdmin
  ) {
    return this.http
      .get<any>(`${environment.apiPathEggMmovments}/EggMarketingService.asmx/getGrowerSplitReportInsert?msvkCode=${msvkCode}&month=${month}&year=${year}&modifiedByIncome=${modifiedByIncome}&modifiedNameIncome=${modifiedNameIncome}&incomeEggInspection=${incomeEggInspection}&incomeEggOrganic=${incomeEggOrganic}&incomeEggFreedom=${incomeEggFreedom}&incomeEggOmega=${incomeEggOmega}&incomeEggImport=${incomeEggImport}&incomeEggPurchase=${incomeEggPurchase}&incomeEggFactoryIncome=${incomeEggFactoryIncome}&incomeBetweenMsvkEggSum=${incomeBetweenMsvkEggSum}
    &modifiedByOutcome=${modifiedByOutcome}&modifiedNameOutcome=${modifiedNameOutcome}&outEggInspection=${outEggInspection}&outEggOrganic=${outEggOrganic}&outEggFreedom=${outEggFreedom}&outEggOmega3=${outEggOmega3}&outEggImport=${outEggImport}&outEggPurchase=${outEggPurchase}&outEggSaleLocalMarket=${outEggSaleLocalMarket}&outEggIndustry=${outEggIndustry}&outBetweenMsvkEggSum=${outBetweenMsvkEggSum}&closeStock=${closeStock}&phat=${phat}&isUpdate=${isUpdate}&isAdmin=${isAdmin}`);
  }

  //// ------------------- car dashboard ----------------------------////

  getCarDetails(carNumber) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCarDetails?carNumber=${carNumber}`
    );
  }

  getCarDelivery(carNumber, deliveryID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCarDelivery?carNumber=${carNumber}&deliveryID=${deliveryID}`
    );
  }

  getPackageByDelivery(deliveryID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getPackageByDelivery?deliveryID=${deliveryID}`
    );
  }

  getInspectorAreaScanByDelivery(deliveryID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getInspectorAreaScanByDelivery?deliveryID=${deliveryID}`
    );
  }

  getCarMovementLogInsert(certificateID, fromDeliveryID, toDeliveryID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCarMovementLogInsert?certificateID=${certificateID}&fromDeliveryID=${fromDeliveryID}&toDeliveryID=${toDeliveryID}`
    );
  }

  getCarMovementsLog(deliveryID) {
    return this.http.get<any>(
      `${environment.apiPathEggMmovments}/EggMarketingService.asmx/getCarMovementsLog?deliveryID=${deliveryID}`
    );
  }
}
