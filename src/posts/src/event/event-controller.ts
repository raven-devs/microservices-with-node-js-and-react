import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';

export const EventController = {
  create: (req: Request, res: Response) => {
    res.status(HttpStatusCode.NoContent).send();
  },
};
