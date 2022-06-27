import { Dropdown, Menu, Modal, notification, Space, Typography } from 'antd';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import React from 'react';
import getFormatedDateTime from '../../utils/dateUtils';
import {
  SolutionCard,
  CardDropDown,
  CardTextContainer,
  CardTitle,
  CardData,
  ButtonDropDown,
} from './styles';
import { useDeleteSolutionMutation } from '../../services/solution';

let config = {
  icon: <DeleteOutlined />,
  title: 'Use Hook!',
  content: (
    <>
      <Typography>Teste</Typography>
    </>
  ),
  className: 'original',
  okText: 'Sim',
  cancelText: 'Não',
  onOk: (closeFn: any) => {
    closeFn();
  },
};

const Card = ({ solution }: any) => {
  const [modal, contextHolder] = Modal.useModal();
  const [
    deleteSolution, // This is the mutation trigger
    { isLoading }, // This is the destructured mutation result
  ] = useDeleteSolutionMutation();

  let navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/solution/${solution.Id}/home`);
  };

  const handleDelete = () => {
    deleteSolution({
      Uid: solution.Id,
    })
      .unwrap()
      .then(() => {
        notification.success({
          message: t('sucess-title'),
          description: t('sucess-message'),
        });
      })
      .catch(error => {
        notification.error({
          message: t('error-title'),
          description: error.data.title || t('error-default-message'),
        });
      });
  };

  const handleModalClick = (e: any): void => {
    function isDeletion() {
      return e.key === '2';
    }
    function isRename() {
      return e.key === '1';
    }

    if (isDeletion()) {
      config.title = t('solution-delete-title');
      config.content = (
        <>
          <Typography>{t('solution-delete-message')}</Typography>
        </>
      );
      config.icon = <DeleteOutlined />;
      config.cancelText = t('button-no-title');
      config.okText = t('button-yes-title');
      config.onOk = handleDelete;
    } else if (isRename()) {
      config.title = t('solution-edit-title');
      config.content = (
        <>
          <Typography>{t('solution-edit-message')}</Typography>
        </>
      );
      config.icon = <ToolOutlined />;
      config.cancelText = t('button-cancel-title');
      config.okText = t('button-ok-title');
    }
    modal.confirm(config);
  };

  const menu = (
    <Menu
      onClick={handleModalClick}
      items={[
        {
          label: t('solution-rename-title'),
          key: '1',
          icon: <EditOutlined />,
        },
        {
          label: t('solution-delete-title'),
          key: '2',
          icon: <DeleteOutlined />,
        },
      ]}
    />
  );
  return (
    <SolutionCard>
      {contextHolder}
      <CardTextContainer onClick={handleCardClick}>
        <CardTitle>{solution.Name}</CardTitle>
        <CardData>
          {getFormatedDateTime(solution.CreatedUtc, t('date-time-format'))}
        </CardData>
      </CardTextContainer>
      <CardDropDown className="nonanimating-button">
        <Dropdown overlay={menu}>
          <ButtonDropDown>
            <Space>
              <EllipsisOutlined />
            </Space>
          </ButtonDropDown>
        </Dropdown>
      </CardDropDown>
    </SolutionCard>
  );
};

export default Card;
