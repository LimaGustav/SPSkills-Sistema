using SPSkills.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SPSkills
{
    public partial class FrequencyPage : parent
    {
        DataTable frequencyTable = new DataTable();
        Competitors selectedCompetitor = new Competitors();
        public FrequencyPage()
        {
            InitializeComponent();
            LoadDataTable();
        }

        private void LoadDataTable()
        {
            frequencyTable.Columns.Add("Data");
            frequencyTable.Columns.Add("Presença");
            frequencyTable.Columns.Add("Entrada");
            frequencyTable.Columns.Add("Saida");
            frequencyTable.Columns.Add("Descricao");
            frequencyTable.Columns.Add("Id");
        }

        private void FrequencyPage_Load(object sender, EventArgs e)
        {
            panel1.BackgroundImage = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/BackGround.png");
            LoadData();
            dataGridView1.BackgroundColor = ColorTranslator.FromHtml("#003764");
        }
        private void LoadData()
        {
            var frequencies = ctx.Frequency.ToList();
            userLogado = ctx.Users.Find(1);
            var lista = ctx.Competitors.ToArray();
            if (userLogado.IdUserType == 1) // adm
            {
                comboBox1.Items.AddRange(lista.Select(x => x.Users.Name).ToArray());
            }
            else if (userLogado.IdUserType == 2)
            {
                var comboList = lista.Where(x => x.Users.IdSkill == userLogado.IdSkill);
                comboBox1.Items.AddRange(comboList.Select(x => x.Users.Name).ToArray());
            }

        }
        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
        {

            "teste".Alert();
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            selectedCompetitor = ctx.Competitors.Where(x => x.Users.Name == comboBox1.SelectedText).FirstOrDefault();
        }

        private void LoadFrequencyTable(List<Frequency> frequencies)
        {
            frequencyTable.Rows.Clear();
            var choseData = dateTimePicker1.Value.Date;
            while(choseData <= DateTime.Now.Date)
            {
                
                var frequency = frequencies.Where(x => x.CheckIn == choseData).FirstOrDefault();
                if (frequencies == null)
                {
                    frequencyTable.Rows.Add(choseData.ToShortDateString(), "Faltou", "", "", "", "");
                }
                choseData = choseData.AddDays(1);
            }
            dataGridView1.DataSource = frequencyTable;
            
        }
    }
}
