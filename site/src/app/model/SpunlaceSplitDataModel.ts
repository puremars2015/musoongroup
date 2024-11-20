export interface SpunlaceSplitDataImportMaterialListModel {
    type:string,	
    lot_no:string,	
    quantity:string,	
    weight:string,	
    length:string,	
    usage_length:string,	
    material_no:string,	
    spec:string,	
    product_date:string,	
    defect:string
}

export interface SpunlaceSplitDataSplitOrdersModel {
    schedule_date:string,	
    order:string,	
    spec:string,	
    weight:string,	
    rolls:string,	
    basic_weight:string,	
    width:string,	
    length:string,	
    speed:string,	
    material:string
}

export interface SpunlaceSplitDataResourceModel {
    is_checked: string,
    jumbo_lot_no: string,
    length_begin: string,
    length_end: string,
    length: string,
    weight: string
}

export interface SpunlaceSplitDataSplitLotsModel {
    lot_no:string, 
    tape1:string,
    tape2:string,
    check_belt:string,
    status:string, 
    start_time:string, 
    end_time:string, 
    detail:any, 
    material:any[], 
    packing_time:string, 
    standard_weight:string, 
    avg_weight:string, 
    max_weight:string, 
    min_weight:string, 
    remark:string

}

export interface SpunlaceSplitDataModel {
    org: string,
    work_order: string,
    machine: string,
    class: string,
    own_date: string,
    user: string,
    order_number: string,
    order_start_time: string,
    order_end_time: string,
    worker: string,
    worker_count: string,
    machine_hour: string,
    status: string,
    import_list: SpunlaceSplitDataImportMaterialListModel[],
    split_orders: SpunlaceSplitDataSplitOrdersModel[],
    remark: any[],
    order_remark: any[],
    resource:SpunlaceSplitDataResourceModel[],
    split_lots:SpunlaceSplitDataSplitLotsModel[],
    current_selected_lot: any,

}