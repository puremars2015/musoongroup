export interface IPager {
    GetCurrentPage(): void;
    SetCurrentPage(page: number): void;
    GetCurrnetPageData(): any;
}

export class Pager {

    private _currentPage: number = 1;

    private _pageSize: number;

    private dataTable: any;

    get GetTotalPage(): number {
        if (this.dataTable == null) {
            return 0;
        }
        return Math.ceil(this.dataTable.length / this._pageSize);
    }

    get GetTotalCounts(): number {
        if (this.dataTable == null) {
            return 0;
        }
        return this.dataTable.length;
    }

    constructor(dataTable: any, pageSize: number = 10) {
        this._pageSize = pageSize;
        this.dataTable = dataTable;
    }

    Bind(dataTable: any) {
        this.dataTable = dataTable;
    }

    GetCurrentPage() {
        return this._currentPage;
    }

    SetCurrentPage(page: number) {
        this._currentPage = page;
    }

    NextPage() {
        this._currentPage++;
    }

    PreviousPage() {
        this._currentPage--;
    }

    GetCurrnetPageData():any {
        let start = (this._currentPage - 1) * this._pageSize;
        let end = start + this._pageSize;
        return this.dataTable.slice(start, end);
    }
}