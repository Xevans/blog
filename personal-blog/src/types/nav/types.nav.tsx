
// similar to a struct
export interface INav {
    current_route: string;
}

// defines any functions or data types that will be contained.
export type NavContextType = {
    current_route: string;
    updateRoute: (route: string) => void;
}