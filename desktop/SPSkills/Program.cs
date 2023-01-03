using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SPSkills
{
    internal static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new LoginPage());
        }
    }

    public static class ME 
    {
        public static DialogResult Alert(this string text)
        {
            return MessageBox.Show(text, "Alerta", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
        }
    }

}
