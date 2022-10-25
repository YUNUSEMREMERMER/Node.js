import { todo } from "../models/todoModel.js";

 export const todoAdd = async (req, res) => {
  try {
      const _todo = await todo.findOne({name: req.body.name})
      if (_todo) {
          return res.status(400).json({
              success: false,
              message: "Bu isimde kayıt mevcut"
          })
      }

      const todoAdd = new todo(req.body)

      await todoAdd.save()
          .then(() => {
              return res.status(201).json(todoAdd)
          })
          .catch((err) => {
              return res.status(400).json({
                  success: false,
                  message: "Kayıt Oluşturulurken Hata Çıktı : " + err
              })
          })

  } catch (error) {
      return res.status(500).json({
          success: false,
          message: "Kayıt Oluşturulamadı !"
      })
  }
}

export const todoGetAll = async (req, res) => {
  const { page } = req.query;
  const limit = 2;
  const skip = Number(page - 1) * limit;
  try {
    const todos = await todo.find().limit(limit).skip(skip);
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "kayıt getirilemedi",
    });
  }
};

export const todoUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const todoUpdate = await todo.findByIdAndUpdate(id, req.body);
    if (todoUpdate) {
      return res.status(200).json({
        success: true,
        message: "kayıt güncellendi",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "kayıt güncellenemedi",
    });
  }
};

export const todoDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const todoDelete = await todo.findByIdAndRemove(id);
    if (todoDelete) {
      return res.status(200).json({
        success: true,
        message: "kayıt silindi",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "kayıt silinemedi",
    });
  }
};

export const todoGet = async (req, res) => {
  const { id } = req.params;
  try {
    const todoGet = await todo.findById(id);
    if (todoGet) {
      return res.status(200).json(todoGet);
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "kayıt bulunamadı",
    });
  }
};
