import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/zyytest/getvalue': (req: Request, res: Response) => {
    // console.log('mock test req', req.body, req.query);
    res.send({
      ...req.query,
      ...req.body,
      from: 'zyy mock',
    });
  },
};
