### 项目配置说明

提供docker部署方式

#### 环境变量列表

以下是本项目所需的环境变量及其默认值：

- `ADMIN_SECRET`: 用于管理员验证，预设值为 `admin`
- `ROOT_SECRET`: 用于系统最高权限验证，预设值为 `root`
- `SECRET_KEY`: 应用程序的加密密钥，预设值为 `secret`
- `MONGO_URI`: MongoDB的连接URI，预设值为 `mongodb://127.0.0.1:27017/`

#### Docker配置
可参考以下命令
```bash
docker run -d
--name teabusiness_app \
-p 8000:3000 \
-e ADMIN_SECRET=admin \
-e ROOT_SECRET=root \
-e SECRET_KEY=secret \
-e MONGO_URI=mongodb://127.0.0.1:27017/ \
deckforme/teabussiness
```


#### 注意事项

- 请根据您的安全需求修改默认的环境变量值。
- 确保 MongoDB 服务在 `MONGO_URI` 指定的地址和端口上已经运行。

通过上述步骤，您可以成功配置并运行应用程序。

