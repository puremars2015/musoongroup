export interface TB_SW_07_VIEW {
    order_no: string,
    form_no: string,
    line: string,
    date: string,
    product:string,
    lotno: string,
    power_on_time: string,
    power_off_time: string,
    site: string,
    change_pe_date: string,
    change_pe_time: string,
    change_repeat_post_date: string,
    change_repeat_post_time: string,
    shutdown_records:shutdown_record[], 
    medicine: string,
    medicine_reason: string,
    spunlace: string,
    spunlace_reason: string,
    membrane: string,
    membrane_reason: string,
    reuse_paste: string,
    reuse_paste_reason: string,
    cover: string,
    cover_reason: string,
    cover_stiker: string,
    cover_stiker_reason: string,
    box: string,
    box_reason: string,
    total: string,
    good_product: string,
    reuse_product: string,
    air_tightness: string,
    quality: string,
    export_quantity: string,
    salesman: string,
    rd_person: string,
    other_person: string,
    squad_leader: string,
    form_writer: string,
    squad_leader_record_time: string,
    form_writer_record_time: string,

}

export interface shutdown_record {
    ps:string,
    pt:string,
    rs:string,
    rt:string,
    reason:string,
    total:string,
    serial_number:number|null,
}