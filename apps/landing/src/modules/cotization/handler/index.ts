import { BulletedListItemBlock } from '@notionhq/client/build/src/api-types';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../libs/notion';
import { FormCotization } from '../context/CotizationContex';
const databaseId = '444610992f8d4379beca4454e3054181';
import { SafeAny } from '@vide/ui';

const objetToListItem = (cotization: SafeAny) => {
  return Object.keys(cotization).map((key) => {
    const candidate = {
      key: key,
      val: cotization[key],
    };
    return {
      type: 'bulleted_list_item',
      bulleted_list_item: {
        text: [
          {
            type: 'text',
            text: {
              content: candidate.key + ':',
            },
            annotations: {
              bold: true,
              italic: true,
            },
          },
          {
            type: 'text',
            text: {
              content: ' ' + candidate.val,
            },
          },
        ],
      },
    } as BulletedListItemBlock;
  });
};

const addNewCotization = (cotization: FormCotization) => {
  return notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      company: {
        type: 'title',
        id: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: cotization.nameCompany,
            },
          },
        ],
      },
      status: {
        type: 'multi_select',
        id: 'm%3ASk',
        multi_select: [
          {
            color: 'pink',
            name: 'pending',
          },
        ],
      },
      // client
      client: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: cotization.name,
            },
          },
        ],
      },
      //
    },
    children: [
      {
        type: 'heading_1',
        heading_1: {
          text: [
            {
              type: 'text',
              text: {
                content: cotization.nameCompany,
                link: null,
              },
            },
          ],
        },
      } as SafeAny,
      ...objetToListItem(cotization),
    ],
  });
};
const sendCotizationController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { cotization } = req.body as { cotization: FormCotization };
  console.log(cotization);
  console.log(req.body);

  try {
    // add to notion
    await addNewCotization(cotization);
    // notify
    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      ok: false,
    });
  }
};
const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method == 'POST') {
    return sendCotizationController(req, res);
  }
};
export default handler;

/**
 Create page documentation
 * @link https://developers.notion.com/reference/post-page
 */
