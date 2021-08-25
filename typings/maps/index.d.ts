declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/maps.html
     */
    maps: any;
    // {
    //   openSysMap(dst: plus.maps.Point, des: string, src: plus.maps.Point);
    //   create(id: string, styles): plus.maps.Map;
    //   getMapById(id: string): plus.maps.Map;
    //   Map: plus.maps.Map;
    //   Point: plus.maps.Point;
    //   Bounds: any;
    // }
  }
}

declare namespace plus.maps {
  interface Map {
    new(id, styles): Map;
  }

  interface Point {
    new(lng: number, lat: number): Point;
    setLng(lng: number);
    getLng(): number;
    setLat(lat: number);
    getLat(): number;
    equals(pt: Point): boolean;
  }
}
