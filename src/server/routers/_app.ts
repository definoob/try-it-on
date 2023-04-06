import {z} from 'zod';
import {procedure, router} from '../trpc';
import * as db from '@/trpc/db';

export const appRouter = router({
  addImage: procedure
    .input(
      z.object({
        id: z.number(),
        originUrl: z.string(),
        dataUrl: z.string(),
      })
    )
    .mutation(({input}) =>
      db.addImage(input.id, input.originUrl, input.dataUrl)
    ),
  getImages: procedure.query(() => db.getImages()),
  editImage: procedure
    .input(
      z.object({
        id: z.number(),
        dataUrl: z.string(),
      })
    )
    .mutation(({input}) => db.updateImage(input.id, input.dataUrl)),
  editRequest: procedure
    .input(
      z.object({
        id: z.number(),
        edit: z.string(),
      })
    )
    .mutation(({input}) => db.updateRequestedEdit(input.id, input.edit)),
});

export type AppRouter = typeof appRouter;
