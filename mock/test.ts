import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  '/api/test/getvalue': (req: Request, res: Response) => {
    console.log('req', req.body);
    res.send({ status: 'ok', currentAuthority: 'admin', body: req.body });
  },
};
