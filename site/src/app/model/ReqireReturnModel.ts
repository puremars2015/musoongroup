export interface RequireReturnModel {
    OrderNumber: string;
    ProductName: string;
    WipNumber: string;
    ProductNumber: string;
    LotQuantity: string;
    Record: Record[];
    Note: string;
} 

export interface Record {
    MaterialNumber: string;
    MaterialName: string;
    MaterialQuantity: number;
    MaterialUnit: string;
    MaterialLot: string;
    MaterialReturnQuantity: number;
}