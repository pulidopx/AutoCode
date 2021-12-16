import { ApiResponse } from "src/app/utils/ApiResponse";
import { Zone } from "../Zone";

/**
 * @author nameless dev
 */
export interface ZoneResponse extends ApiResponse {
    data: Zone[];
}
  