import { MouseEventHandler } from "react";

export interface PaginationProps {
    listData: any
    onNextClicked: MouseEventHandler<HTMLButtonElement>
    onPreviousClicked: MouseEventHandler<HTMLButtonElement>
    onPageClicked: MouseEventHandler<HTMLButtonElement>
}